// ============================================
// F1 RACE PREDICTOR - PREDICTION ENGINE
// ============================================

// F1 Points System
const POINTS_SYSTEM = {
    1: 25, 2: 18, 3: 15, 4: 12, 5: 10,
    6: 8, 7: 6, 8: 4, 9: 2, 10: 1
};

const SPRINT_POINTS = {
    1: 8, 2: 7, 3: 6, 4: 5, 5: 4,
    6: 3, 7: 2, 8: 1
};

class F1Predictor {
    constructor() {
        this.weights = {
            driverSkill: 0.25,
            teamPerformance: 0.22,
            qualiPace: 0.18,
            trackFamiliarity: 0.15,
            consistency: 0.10,
            wetWeather: 0.10
        };
        this.chaosFactor = 0;
        this.strategyFactor = 0;
    }

    predictRace(circuitId) {
        const circuit = CIRCUITS.find(c => c.id === circuitId);
        if (!circuit) return [];

        const predictions = DRIVERS.map(driver => {
            const score = this.calculateDriverScore(driver, circuit, false);
            const predictedTime = this.calculatePredictedTime(score, circuit, false);
            const confidence = this.calculateConfidence(driver, circuit);

            return { driver, score, predictedTime, confidence };
        });

        // Sort by predicted time (fastest first) - THIS DETERMINES POSITION
        predictions.sort((a, b) => a.predictedTime - b.predictedTime);
        
        // Assign UNIQUE positions P1 to P20 based on sorted order
        predictions.forEach((pred, index) => {
            pred.position = index + 1;
            pred.predictedPos = index + 1; // This is the unique predicted position
            pred.predictedTimeStr = this.formatTime(pred.predictedTime);
            pred.gap = index === 0 ? "LEADER" : `+${(pred.predictedTime - predictions[0].predictedTime).toFixed(3)}s`;
            pred.predictedPoints = POINTS_SYSTEM[index + 1] || 0;
        });

        return predictions;
    }

    predictSprintRace(circuitId) {
        const circuit = CIRCUITS.find(c => c.id === circuitId);
        if (!circuit) return [];

        const predictions = DRIVERS.map(driver => {
            const score = this.calculateDriverScore(driver, circuit, true);
            const predictedTime = this.calculatePredictedTime(score, circuit, true);
            const confidence = this.calculateSprintConfidence(driver, circuit);

            return { driver, score, predictedTime, confidence };
        });

        // Sort by predicted time (fastest first)
        predictions.sort((a, b) => a.predictedTime - b.predictedTime);
        
        // Assign UNIQUE positions
        predictions.forEach((pred, index) => {
            pred.position = index + 1;
            pred.predictedPos = index + 1;
            pred.predictedTimeStr = this.formatTime(pred.predictedTime);
            pred.gap = index === 0 ? "LEADER" : `+${(pred.predictedTime - predictions[0].predictedTime).toFixed(3)}s`;
            pred.predictedPoints = SPRINT_POINTS[index + 1] || 0;
        });

        return predictions;
    }

    calculateDriverScore(driver, circuit, isSprint) {
        const team = TEAMS[driver.team];
        const trackStats = getDriverTrackStats(driver.code, circuit.id);
        
        let driverSkillScore = isSprint ? (driver.skill * 0.7 + (driver.sprintPace || driver.skill) * 0.3) : driver.skill;
        let teamScore = team ? (isSprint ? (team.sprintPace || team.performance) : (team.performance * 0.6 + team.reliability * 0.2 + team.strategy * 0.2)) : 70;
        let qualiScore = driver.qualiPace;
        let consistencyScore = driver.consistency;
        
        if (isSprint) {
            qualiScore *= 1.3;
        }
        
        let familiarityBonus = 0;
        if (trackStats.wins > 0) familiarityBonus += trackStats.wins * 3;
        if (trackStats.podiums > 0) familiarityBonus += trackStats.podiums * 1.5;
        familiarityBonus += Math.max(0, (10 - trackStats.avgFinish)) * 2;
        
        let weatherScore = circuit.rainChance > 30 ? driver.wetWeather : driver.skill;
        
        const overtakingPenalty = (circuit.overtakingDifficulty - 5) * (isSprint ? 0.8 : 0.5);
        qualiScore -= overtakingPenalty;
        
        const totalScore = (
            driverSkillScore * this.weights.driverSkill +
            teamScore * this.weights.teamPerformance +
            qualiScore * this.weights.qualiPace +
            familiarityBonus * this.weights.trackFamiliarity +
            consistencyScore * this.weights.consistency +
            weatherScore * this.weights.wetWeather
        );

        // Small randomness for variation but not too much
        const randomFactor = 1 + (Math.random() - 0.5) * (0.015 + this.chaosFactor * 0.03);
        return totalScore * randomFactor;
    }

    calculatePredictedTime(score, circuit, isSprint) {
        const baseLapTime = circuit.length * 14.5;
        const laps = isSprint ? (circuit.sprintLaps || 19) : circuit.laps;
        const baseRaceTime = baseLapTime * laps;
        
        // Higher score = faster time (inverse relationship)
        // Normalize score to create time differences
        const maxScore = 100;
        const scoreDiff = maxScore - score;
        
        // Each point difference = ~0.3 seconds per lap difference
        const timePerPoint = 0.3 * laps;
        const timeDelta = scoreDiff * timePerPoint / 100;
        
        return baseRaceTime + timeDelta;
    }

    calculateConfidence(driver, circuit) {
        const team = TEAMS[driver.team];
        const trackStats = getDriverTrackStats(driver.code, circuit.id);
        
        let confidence = 70;
        if (driver.skill >= 95) confidence += 12;
        else if (driver.skill >= 90) confidence += 8;
        else if (driver.skill >= 85) confidence += 5;
        
        if (team && team.performance >= 93) confidence += 10;
        else if (team && team.performance >= 88) confidence += 6;
        else if (team && team.performance >= 80) confidence += 3;
        
        if (trackStats.wins > 2) confidence += 8;
        else if (trackStats.wins > 0) confidence += 5;
        if (trackStats.podiums >= 3) confidence += 4;
        
        if (circuit.rainChance > 50) confidence -= 12;
        else if (circuit.rainChance > 30) confidence -= 6;
        
        if (circuit.overtakingDifficulty >= 8) confidence += 5;
        else if (circuit.overtakingDifficulty <= 3) confidence -= 3;
        
        confidence -= this.chaosFactor * 15;
        
        return Math.min(95, Math.max(40, Math.round(confidence)));
    }

    calculateSprintConfidence(driver, circuit) {
        let confidence = this.calculateConfidence(driver, circuit);
        confidence += 5; // Sprints slightly more predictable (shorter)
        if (circuit.overtakingDifficulty >= 6) confidence -= 3;
        return Math.min(95, Math.max(45, Math.round(confidence)));
    }

    formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = (seconds % 60).toFixed(3);
        
        if (hours > 0) return `${hours}:${mins.toString().padStart(2, '0')}:${secs.padStart(6, '0')}`;
        return `${mins}:${secs.padStart(6, '0')}`;
    }

    getPodium(circuitId) { return this.predictRace(circuitId).slice(0, 3); }
    getWinner(circuitId) { return this.predictRace(circuitId)[0]; }
    getSprintPodium(circuitId) { return this.predictSprintRace(circuitId).slice(0, 3); }
}

class MonteCarloSimulator {
    constructor(iterations = 1000) {
        this.iterations = iterations;
        this.predictor = new F1Predictor();
    }

    simulate(circuitId, isSprint = false) {
        const results = {};
        DRIVERS.forEach(d => { results[d.code] = { wins: 0, podiums: 0, top5: 0, top10: 0, positions: [], totalPoints: 0 }; });

        for (let i = 0; i < this.iterations; i++) {
            const prediction = isSprint ? this.predictor.predictSprintRace(circuitId) : this.predictor.predictRace(circuitId);
            prediction.forEach((pred) => {
                const code = pred.driver.code;
                const pos = pred.position;
                results[code].positions.push(pos);
                results[code].totalPoints += pred.predictedPoints;
                if (pos === 1) results[code].wins++;
                if (pos <= 3) results[code].podiums++;
                if (pos <= 5) results[code].top5++;
                if (pos <= 10) results[code].top10++;
            });
        }

        return Object.entries(results).map(([code, stats]) => ({
            code,
            driver: DRIVERS.find(d => d.code === code),
            winProbability: (stats.wins / this.iterations * 100).toFixed(1),
            podiumProbability: (stats.podiums / this.iterations * 100).toFixed(1),
            avgPosition: (stats.positions.reduce((a, b) => a + b, 0) / stats.positions.length).toFixed(1),
            avgPoints: (stats.totalPoints / this.iterations).toFixed(1)
        })).sort((a, b) => parseFloat(b.winProbability) - parseFloat(a.winProbability));
    }
}

const predictor = new F1Predictor();
const simulator = new MonteCarloSimulator(500);
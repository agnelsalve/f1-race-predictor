// ============================================
// F1 RACE PREDICTOR - MAIN APPLICATION
// ============================================

let currentCircuit = null;
let currentPredictions = null;
let currentRaceType = 'main'; // 'main' or 'sprint'

// Default slider values
const defaultSliderValues = {
    pace: 95, quali: 82, team: 68, weather: 45, temp: 38,
    tire: 55, pitStop: 72, undercut: 48, yellowFlag: 35,
    safetyCar: 28, restart: 22, firstLap: 40, reliability: 85, driverError: 15
};

let sliderValues = { ...defaultSliderValues };

// Slider configuration
const sliderConfig = [
    { id: 'paceSlider', valueId: 'paceValue', key: 'pace', color: 'blue' },
    { id: 'qualiSlider', valueId: 'qualiValue', key: 'quali', color: 'blue' },
    { id: 'teamSlider', valueId: 'teamValue', key: 'team', color: 'blue' },
    { id: 'weatherSlider', valueId: 'weatherValue', key: 'weather', color: 'blue' },
    { id: 'tempSlider', valueId: 'tempValue', key: 'temp', color: 'blue' },
    { id: 'tireSlider', valueId: 'tireValue', key: 'tire', color: 'blue' },
    { id: 'pitStopSlider', valueId: 'pitStopValue', key: 'pitStop', color: 'blue' },
    { id: 'undercutSlider', valueId: 'undercutValue', key: 'undercut', color: 'blue' },
    { id: 'yellowFlagSlider', valueId: 'yellowFlagValue', key: 'yellowFlag', color: 'yellow' },
    { id: 'safetyCarSlider', valueId: 'safetyCarValue', key: 'safetyCar', color: 'red' },
    { id: 'restartSlider', valueId: 'restartValue', key: 'restart', color: 'red' },
    { id: 'firstLapSlider', valueId: 'firstLapValue', key: 'firstLap', color: 'orange' },
    { id: 'reliabilitySlider', valueId: 'reliabilityValue', key: 'reliability', color: 'blue' },
    { id: 'driverErrorSlider', valueId: 'driverErrorValue', key: 'driverError', color: 'blue' }
];

// Preset scenarios
const presets = {
    dry: { pace: 95, quali: 90, team: 75, weather: 10, temp: 50, tire: 60, pitStop: 75, undercut: 55, yellowFlag: 25, safetyCar: 20, restart: 15, firstLap: 30, reliability: 90, driverError: 10 },
    wet: { pace: 70, quali: 60, team: 50, weather: 95, temp: 30, tire: 80, pitStop: 85, undercut: 70, yellowFlag: 65, safetyCar: 55, restart: 45, firstLap: 60, reliability: 75, driverError: 35 },
    chaos: { pace: 50, quali: 40, team: 45, weather: 70, temp: 40, tire: 65, pitStop: 60, undercut: 75, yellowFlag: 85, safetyCar: 80, restart: 75, firstLap: 90, reliability: 60, driverError: 50 },
    strategic: { pace: 80, quali: 75, team: 85, weather: 30, temp: 55, tire: 95, pitStop: 90, undercut: 85, yellowFlag: 40, safetyCar: 35, restart: 30, firstLap: 35, reliability: 85, driverError: 15 },
    monaco: { pace: 85, quali: 98, team: 70, weather: 25, temp: 45, tire: 40, pitStop: 50, undercut: 30, yellowFlag: 55, safetyCar: 45, restart: 40, firstLap: 50, reliability: 80, driverError: 25 },
    sprint: { pace: 90, quali: 95, team: 80, weather: 30, temp: 50, tire: 20, pitStop: 10, undercut: 10, yellowFlag: 20, safetyCar: 15, restart: 30, firstLap: 50, reliability: 95, driverError: 12 }
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    populateCircuitSelector();
    renderFeatureImportance();
    setupEventListeners();
    initializeSliders();
    
    const select = document.getElementById('circuitSelect');
    if (select && CIRCUITS.length > 0) {
        select.value = CIRCUITS[0].id;
        updateTrackInfo(CIRCUITS[0]);
    }
    
    console.log('🏎️ F1 Race Predictor initialized');
    console.log(`📊 ${CIRCUITS.length} circuits loaded`);
    console.log(`👨‍✈️ ${DRIVERS.length} drivers loaded`);
}

// ============================================
// RACE TYPE TOGGLE (Main vs Sprint)
// ============================================

function setRaceType(type) {
    currentRaceType = type;
    
    const mainBtn = document.getElementById('mainRaceBtn');
    const sprintBtn = document.getElementById('sprintRaceBtn');
    
    if (type === 'main') {
        mainBtn.classList.add('active');
        mainBtn.classList.remove('sprint-active');
        sprintBtn.classList.remove('active', 'sprint-active');
    } else {
        sprintBtn.classList.add('active', 'sprint-active');
        mainBtn.classList.remove('active');
        // Apply sprint preset automatically
        applyPreset('sprint');
    }
    
    updateSprintUI();
    
    // Re-run prediction if circuit selected
    if (currentCircuit && currentPredictions) {
        runPrediction();
    }
    
    console.log(`🏁 Race type set to: ${type}`);
}

function updateSprintUI() {
    const sprintInfo = document.getElementById('sprintInfo');
    const noSprintInfo = document.getElementById('noSprintInfo');
    const sprintResults = document.getElementById('sprintResults2025');
    const sprintLaps = document.getElementById('sprintLaps');
    
    if (!currentCircuit) return;
    
    if (currentRaceType === 'sprint') {
        if (currentCircuit.hasSprint) {
            if (sprintInfo) sprintInfo.style.display = 'flex';
            if (noSprintInfo) noSprintInfo.style.display = 'none';
            if (sprintLaps) sprintLaps.textContent = `${currentCircuit.sprintLaps} Laps`;
            
            // Show 2025 sprint results if available
            if (currentCircuit.sprint2025 && sprintResults) {
                sprintResults.style.display = 'block';
                document.getElementById('sprint2025Winner').textContent = getDriverName(currentCircuit.sprint2025.podium[0]);
                document.getElementById('sprint2025Second').textContent = getDriverName(currentCircuit.sprint2025.podium[1]);
                document.getElementById('sprint2025Third').textContent = getDriverName(currentCircuit.sprint2025.podium[2]);
            } else if (sprintResults) {
                sprintResults.style.display = 'none';
            }
        } else {
            if (sprintInfo) sprintInfo.style.display = 'none';
            if (noSprintInfo) noSprintInfo.style.display = 'flex';
            if (sprintResults) sprintResults.style.display = 'none';
        }
    } else {
        if (sprintInfo) sprintInfo.style.display = 'none';
        if (noSprintInfo) noSprintInfo.style.display = 'none';
        if (sprintResults) sprintResults.style.display = 'none';
    }
}

function getDriverName(code) {
    const driver = DRIVERS.find(d => d.code === code);
    return driver ? driver.name : code;
}

// ============================================
// SLIDER FUNCTIONALITY
// ============================================

function initializeSliders() {
    sliderConfig.forEach(({ id, valueId, key, color }) => {
        const slider = document.getElementById(id);
        const valueDisplay = document.getElementById(valueId);
        
        if (slider && valueDisplay) {
            slider.value = sliderValues[key];
            valueDisplay.textContent = `${sliderValues[key]}%`;
            updateSliderTrack(slider, color);
            
            slider.addEventListener('input', (e) => {
                const value = e.target.value;
                sliderValues[key] = parseInt(value);
                valueDisplay.textContent = `${value}%`;
                updateSliderTrack(slider, color);
            });
        }
    });
}

function updateSliderTrack(slider, color = 'blue') {
    const value = slider.value;
    const colors = { blue: '#0090ff', yellow: '#ffc107', orange: '#ff9800', red: '#e10600' };
    const trackColor = colors[color] || colors.blue;
    slider.style.background = `linear-gradient(to right, ${trackColor} 0%, ${trackColor} ${value}%, rgba(255,255,255,0.1) ${value}%, rgba(255,255,255,0.1) 100%)`;
}

function resetSliders() {
    sliderValues = { ...defaultSliderValues };
    sliderConfig.forEach(({ id, valueId, key, color }) => {
        const slider = document.getElementById(id);
        const valueDisplay = document.getElementById(valueId);
        if (slider && valueDisplay) {
            slider.value = defaultSliderValues[key];
            valueDisplay.textContent = `${defaultSliderValues[key]}%`;
            updateSliderTrack(slider, color);
        }
    });
    console.log('🔄 Sliders reset to default values');
}

function applyPreset(presetName) {
    const preset = presets[presetName];
    if (!preset) return;
    
    sliderValues = { ...preset };
    sliderConfig.forEach(({ id, valueId, key, color }) => {
        const slider = document.getElementById(id);
        const valueDisplay = document.getElementById(valueId);
        if (slider && valueDisplay) {
            slider.value = preset[key];
            valueDisplay.textContent = `${preset[key]}%`;
            updateSliderTrack(slider, color);
        }
    });
    
    console.log(`🎯 Applied preset: ${presetName}`);
}

// ============================================
// CIRCUIT SELECTOR
// ============================================

function populateCircuitSelector() {
    const select = document.getElementById('circuitSelect');
    if (!select) return;
    
    select.innerHTML = '';
    
    CIRCUITS.forEach(circuit => {
        const option = document.createElement('option');
        option.value = circuit.id;
        option.textContent = circuit.hasSprint 
            ? `⚡ ${circuit.name} (${circuit.country})` 
            : `${circuit.name} (${circuit.country})`;
        select.appendChild(option);
    });
}

function setupEventListeners() {
    const select = document.getElementById('circuitSelect');
    if (select) {
        select.addEventListener('change', (e) => {
            const circuit = CIRCUITS.find(c => c.id === e.target.value);
            if (circuit) {
                currentCircuit = circuit;
                updateTrackInfo(circuit);
                updateSprintUI();
            }
        });
    }
}

function updateTrackInfo(circuit) {
    currentCircuit = circuit;
    
    document.getElementById('circuitName').textContent = circuit.circuit;
    document.getElementById('circuitLength').textContent = `${circuit.length} km`;
    document.getElementById('circuitLaps').textContent = `${circuit.laps} laps`;
    document.getElementById('circuitTemp').textContent = `${circuit.avgTemp}°C`;
    
    // Update 2025 winner banner
    if (circuit.winner2025) {
        const winnerName = document.getElementById('winner2025Name');
        const winnerTeam = document.getElementById('winner2025Team');
        const winnerTime = document.getElementById('winner2025Time');
        
        if (winnerName) winnerName.textContent = circuit.winner2025.name;
        if (winnerTeam) winnerTeam.textContent = circuit.winner2025.team;
        if (winnerTime) winnerTime.textContent = circuit.winner2025.time;
    }
    
    updateSprintUI();
}

// ============================================
// PREDICTIONS
// ============================================

function updatePredictions() {
    if (!currentCircuit) {
        alert('Please select a circuit first!');
        return;
    }
    runPrediction();
}

function runPrediction() {
    if (!currentCircuit) {
        alert('Please select a circuit first!');
        return;
    }
    
    const btn = document.querySelector('.btn-predict');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span>⏳</span> Calculating...';
    btn.disabled = true;
    
    // Apply slider weights to predictor
    const chaosFactor = (sliderValues.safetyCar + sliderValues.yellowFlag + sliderValues.restart) / 300;
    const strategyFactor = (sliderValues.tire + sliderValues.pitStop + sliderValues.undercut) / 300;
    
    predictor.chaosFactor = chaosFactor;
    predictor.strategyFactor = strategyFactor;
    
    setTimeout(() => {
        if (currentRaceType === 'sprint') {
            currentPredictions = predictor.predictSprintRace(currentCircuit.id);
        } else {
            currentPredictions = predictor.predictRace(currentCircuit.id);
        }
        
        if (chaosFactor > 0.4) {
            currentPredictions = applyChaosShuffle(currentPredictions, chaosFactor);
        }
        
        updatePodium(currentPredictions);
        updateResultsTable(currentPredictions);
        
        document.getElementById('predictions').scrollIntoView({ behavior: 'smooth' });
        
        btn.innerHTML = originalText;
        btn.disabled = false;
        
        console.log(`✅ ${currentRaceType === 'sprint' ? 'Sprint' : 'Race'} predictions generated for ${currentCircuit.name}`);
    }, 800);
}

function applyChaosShuffle(predictions, chaosFactor) {
    return predictions.map((pred, index) => {
        if (Math.random() < chaosFactor * 0.5 && index < 10) {
            pred.confidence = Math.max(40, pred.confidence - Math.floor(chaosFactor * 20));
        }
        return pred;
    }).sort((a, b) => b.score - a.score);
}

// ============================================
// PODIUM DISPLAY
// ============================================

function updatePodium(predictions) {
    if (predictions.length < 3) return;
    
    const [first, second, third] = predictions;
    
    document.getElementById('p1-code').textContent = first.driver.code;
    document.getElementById('p1-team').textContent = first.driver.team;
    document.getElementById('p1-conf').textContent = `${first.confidence}% confidence`;
    
    document.getElementById('p2-code').textContent = second.driver.code;
    document.getElementById('p2-team').textContent = second.driver.team;
    document.getElementById('p2-conf').textContent = `${second.confidence}% confidence`;
    
    document.getElementById('p3-code').textContent = third.driver.code;
    document.getElementById('p3-team').textContent = third.driver.team;
    document.getElementById('p3-conf').textContent = `${third.confidence}% confidence`;
    
    animatePodium();
}

function animatePodium() {
    const positions = document.querySelectorAll('.podium-position');
    positions.forEach((pos, index) => {
        pos.style.animation = 'none';
        pos.offsetHeight;
        pos.style.animation = `slideUp 0.8s ease forwards ${index * 0.2}s`;
    });
}

// ============================================
// RESULTS TABLE WITH PREDICTED POS AND 2025 FINISH
// ============================================

function updateResultsTable(predictions) {
    const tbody = document.getElementById('resultsTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    // Predictions are already sorted by predicted time, position is unique P1-P20
    predictions.forEach((pred, index) => {
        const row = document.createElement('tr');
        
        // Position badge styling
        let posBadgeClass = 'pos-badge';
        if (pred.position === 1) posBadgeClass += ' gold';
        else if (pred.position === 2) posBadgeClass += ' silver';
        else if (pred.position === 3) posBadgeClass += ' bronze';
        
        // Confidence styling
        let confClass = 'confidence-low';
        if (pred.confidence >= 80) confClass = 'confidence-high';
        else if (pred.confidence >= 65) confClass = 'confidence-med';
        
        // Get 2025 finish position (handles DNF)
        const finish2025 = get2025Finish(pred.driver.code);
        const finishClass = getFinishClass(finish2025);
        
        // Points styling
        let pointsClass = 'points-zero';
        if (pred.predictedPoints >= 25) pointsClass = 'points-win';
        else if (pred.predictedPoints >= 15) pointsClass = 'points-podium';
        else if (pred.predictedPoints >= 8) pointsClass = 'points-good';
        else if (pred.predictedPoints > 0) pointsClass = 'points-some';
        
        row.innerHTML = `
            <td><span class="${posBadgeClass}">${pred.position}</span></td>
            <td><strong>${pred.driver.name}</strong> <span style="color: var(--f1-light-gray)">(${pred.driver.code})</span></td>
            <td><span style="color: ${pred.driver.teamColor}">${pred.driver.team}</span></td>
            <td>${pred.predictedTimeStr}</td>
            <td class="${confClass}">${pred.confidence}%</td>
            <td class="${pointsClass}">${pred.predictedPoints > 0 ? pred.predictedPoints + ' pts' : '-'}</td>
            <td class="finish-2025 ${finishClass}">${finish2025}</td>
        `;
        
        tbody.appendChild(row);
    });
    
    // Show total predicted points
    const totalPoints = predictions.reduce((sum, p) => sum + p.predictedPoints, 0);
    console.log(`📊 Total points in race: ${totalPoints}`);
}

// Get 2025 finish position for a driver
function get2025Finish(driverCode) {
    if (!currentCircuit || !currentCircuit.results2025) return '-';
    
    // Check sprint results if sprint mode
    if (currentRaceType === 'sprint' && currentCircuit.sprint2025) {
        const sprintPos = currentCircuit.sprint2025.podium.indexOf(driverCode);
        if (sprintPos !== -1) return `P${sprintPos + 1}`;
    }
    
    // Check main race results - handle DNF entries
    const results = currentCircuit.results2025;
    
    for (let i = 0; i < results.length; i++) {
        const result = results[i];
        
        // Check if it's a DNF entry (format: "DNF-CODE")
        if (result.startsWith('DNF-')) {
            const dnfCode = result.replace('DNF-', '');
            if (dnfCode === driverCode) {
                return 'DNF';
            }
        } else if (result === driverCode) {
            return `P${i + 1}`;
        }
    }
    
    return '-';
}

// Get CSS class for finish position styling
function getFinishClass(finish) {
    if (finish === '-') return 'outside';
    if (finish === 'DNF') return 'dnf';
    
    const pos = parseInt(finish.replace('P', ''));
    if (isNaN(pos)) return 'outside';
    
    if (pos === 1) return 'p1';
    if (pos === 2) return 'p2';
    if (pos === 3) return 'p3';
    if (pos <= 5) return 'top5';
    if (pos <= 10) return 'top10';
    if (pos <= 15) return 'top15';
    return 'outside';
}

// ============================================
// FEATURE IMPORTANCE CHART
// ============================================

function renderFeatureImportance() {
    const container = document.getElementById('featureImportance');
    if (!container) return;
    
    container.innerHTML = '';
    
    CONFIG.featureImportance.forEach(feature => {
        const bar = document.createElement('div');
        bar.className = 'feature-bar';
        bar.innerHTML = `
            <div class="feature-name">${feature.name}</div>
            <div class="bar-track">
                <div class="bar-fill" style="width: ${feature.weight}%">${feature.weight}%</div>
            </div>
        `;
        container.appendChild(bar);
    });
    
    animateFeatureBars();
}

function animateFeatureBars() {
    const bars = document.querySelectorAll('.bar-fill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => { bar.style.width = width; }, 100);
            }
        });
    }, { threshold: 0.5 });
    bars.forEach(bar => observer.observe(bar));
}

// ============================================
// DEBUG EXPORTS
// ============================================

window.F1App = {
    predictor, simulator, CIRCUITS, DRIVERS, TEAMS,
    sliderValues: () => sliderValues,
    currentCircuit: () => currentCircuit,
    currentPredictions: () => currentPredictions,
    currentRaceType: () => currentRaceType,
    runPrediction, updatePredictions, resetSliders, applyPreset, setRaceType
};

console.log('🏁 F1 App loaded with 2025 Results');
// ============================================
// F1 RACE PREDICTOR - HISTORICAL DATA
// ============================================

const HISTORICAL_DATA = {
    "2025": {
        "australia": { podium: ["NOR", "VER", "RUS"], fastestLap: "NOR", polePosition: "NOR", conditions: "wet", avgLapTime: 81.2 },
        "china": { podium: ["PIA", "NOR", "RUS"], fastestLap: "NOR", polePosition: "PIA", conditions: "dry", avgLapTime: 96.1 },
        "japan": { podium: ["VER", "NOR", "PIA"], fastestLap: "VER", polePosition: "VER", conditions: "dry", avgLapTime: 92.4 },
        "bahrain": { podium: ["PIA", "NOR", "VER"], fastestLap: "NOR", polePosition: "PIA", conditions: "dry", avgLapTime: 94.8 },
        "saudi": { podium: ["PIA", "VER", "NOR"], fastestLap: "VER", polePosition: "VER", conditions: "dry", avgLapTime: 91.5 },
        "miami": { podium: ["PIA", "NOR", "VER"], fastestLap: "NOR", polePosition: "NOR", conditions: "dry", avgLapTime: 90.8 },
        "emilia": { podium: ["VER", "NOR", "PIA"], fastestLap: "VER", polePosition: "NOR", conditions: "dry", avgLapTime: 77.9 },
        "monaco": { podium: ["NOR", "PIA", "VER"], fastestLap: "LEC", polePosition: "NOR", conditions: "dry", avgLapTime: 74.8 },
        "spain": { podium: ["PIA", "NOR", "VER"], fastestLap: "NOR", polePosition: "PIA", conditions: "dry", avgLapTime: 78.4 },
        "canada": { podium: ["RUS", "NOR", "VER"], fastestLap: "NOR", polePosition: "RUS", conditions: "mixed", avgLapTime: 76.2 },
        "austria": { podium: ["NOR", "VER", "PIA"], fastestLap: "NOR", polePosition: "NOR", conditions: "dry", avgLapTime: 67.8 },
        "britain": { podium: ["NOR", "PIA", "VER"], fastestLap: "NOR", polePosition: "NOR", conditions: "mixed", avgLapTime: 91.5 },
        "belgium": { podium: ["PIA", "NOR", "VER"], fastestLap: "VER", polePosition: "NOR", conditions: "dry", avgLapTime: 108.2 },
        "hungary": { podium: ["NOR", "PIA", "VER"], fastestLap: "NOR", polePosition: "NOR", conditions: "dry", avgLapTime: 81.4 },
        "netherlands": { podium: ["PIA", "VER", "NOR"], fastestLap: "PIA", polePosition: "PIA", conditions: "dry", avgLapTime: 72.9 },
        "monza": { podium: ["VER", "NOR", "PIA"], fastestLap: "VER", polePosition: "VER", conditions: "dry", avgLapTime: 82.7 },
        "azerbaijan": { podium: ["VER", "NOR", "PIA"], fastestLap: "VER", polePosition: "VER", conditions: "dry", avgLapTime: 105.8 },
        "singapore": { podium: ["RUS", "NOR", "VER"], fastestLap: "NOR", polePosition: "RUS", conditions: "dry", avgLapTime: 97.4 },
        "usa": { podium: ["VER", "NOR", "PIA"], fastestLap: "VER", polePosition: "VER", conditions: "dry", avgLapTime: 96.8 },
        "mexico": { podium: ["NOR", "VER", "PIA"], fastestLap: "NOR", polePosition: "NOR", conditions: "dry", avgLapTime: 79.5 },
        "brazil": { podium: ["NOR", "VER", "PIA"], fastestLap: "VER", polePosition: "NOR", conditions: "wet", avgLapTime: 74.2 },
        "vegas": { podium: ["VER", "NOR", "PIA"], fastestLap: "VER", polePosition: "NOR", conditions: "dry", avgLapTime: 94.1 },
        "qatar": { podium: ["VER", "NOR", "PIA"], fastestLap: "VER", polePosition: "VER", conditions: "dry", avgLapTime: 86.3 },
        "abudhabi": { podium: ["VER", "NOR", "PIA"], fastestLap: "VER", polePosition: "VER", conditions: "dry", avgLapTime: 87.9 }
    },
    "2024": {
        "bahrain": { podium: ["VER", "PER", "SAI"], fastestLap: "VER", polePosition: "VER", conditions: "dry", avgLapTime: 95.2 },
        "saudi": { podium: ["VER", "PER", "LEC"], fastestLap: "LEC", polePosition: "VER", conditions: "dry", avgLapTime: 92.1 },
        "australia": { podium: ["SAI", "LEC", "NOR"], fastestLap: "LEC", polePosition: "VER", conditions: "dry", avgLapTime: 81.5 },
        "japan": { podium: ["VER", "PER", "SAI"], fastestLap: "VER", polePosition: "VER", conditions: "dry", avgLapTime: 93.8 },
        "china": { podium: ["VER", "NOR", "PER"], fastestLap: "NOR", polePosition: "VER", conditions: "dry", avgLapTime: 96.4 },
        "miami": { podium: ["NOR", "VER", "LEC"], fastestLap: "PIA", polePosition: "VER", conditions: "dry", avgLapTime: 91.7 },
        "emilia": { podium: ["VER", "NOR", "LEC"], fastestLap: "VER", polePosition: "VER", conditions: "dry", avgLapTime: 78.3 },
        "monaco": { podium: ["LEC", "PIA", "SAI"], fastestLap: "HAM", polePosition: "LEC", conditions: "dry", avgLapTime: 75.2 },
        "canada": { podium: ["VER", "NOR", "RUS"], fastestLap: "HAM", polePosition: "RUS", conditions: "mixed", avgLapTime: 77.8 },
        "spain": { podium: ["VER", "NOR", "HAM"], fastestLap: "NOR", polePosition: "NOR", conditions: "dry", avgLapTime: 79.6 },
        "austria": { podium: ["RUS", "PIA", "SAI"], fastestLap: "VER", polePosition: "VER", conditions: "dry", avgLapTime: 68.4 },
        "britain": { podium: ["HAM", "VER", "NOR"], fastestLap: "NOR", polePosition: "RUS", conditions: "wet", avgLapTime: 92.3 },
        "hungary": { podium: ["PIA", "NOR", "HAM"], fastestLap: "NOR", polePosition: "NOR", conditions: "dry", avgLapTime: 82.1 },
        "belgium": { podium: ["HAM", "PIA", "LEC"], fastestLap: "VER", polePosition: "LEC", conditions: "dry", avgLapTime: 109.5 },
        "netherlands": { podium: ["NOR", "VER", "LEC"], fastestLap: "NOR", polePosition: "NOR", conditions: "dry", avgLapTime: 73.8 },
        "monza": { podium: ["LEC", "PIA", "NOR"], fastestLap: "NOR", polePosition: "NOR", conditions: "dry", avgLapTime: 83.9 },
        "azerbaijan": { podium: ["PIA", "LEC", "RUS"], fastestLap: "NOR", polePosition: "LEC", conditions: "dry", avgLapTime: 107.2 },
        "singapore": { podium: ["NOR", "VER", "PIA"], fastestLap: "RIC", polePosition: "NOR", conditions: "dry", avgLapTime: 98.6 },
        "usa": { podium: ["LEC", "SAI", "VER"], fastestLap: "PIA", polePosition: "NOR", conditions: "dry", avgLapTime: 97.4 },
        "mexico": { podium: ["SAI", "NOR", "LEC"], fastestLap: "LEC", polePosition: "SAI", conditions: "dry", avgLapTime: 80.2 },
        "brazil": { podium: ["VER", "OCO", "GAS"], fastestLap: "NOR", polePosition: "NOR", conditions: "wet", avgLapTime: 75.8 },
        "vegas": { podium: ["RUS", "HAM", "SAI"], fastestLap: "NOR", polePosition: "RUS", conditions: "dry", avgLapTime: 95.3 },
        "qatar": { podium: ["VER", "LEC", "PIA"], fastestLap: "NOR", polePosition: "VER", conditions: "dry", avgLapTime: 87.1 },
        "abudhabi": { podium: ["NOR", "SAI", "LEC"], fastestLap: "PIA", polePosition: "NOR", conditions: "dry", avgLapTime: 88.7 }
    },
    "2023": {
        "bahrain": { podium: ["VER", "PER", "ALO"], conditions: "dry" },
        "saudi": { podium: ["PER", "VER", "ALO"], conditions: "dry" },
        "australia": { podium: ["VER", "HAM", "ALO"], conditions: "dry" },
        "japan": { podium: ["VER", "NOR", "PIA"], conditions: "wet" },
        "monaco": { podium: ["VER", "ALO", "OCO"], conditions: "dry" },
        "spain": { podium: ["VER", "HAM", "RUS"], conditions: "dry" },
        "austria": { podium: ["VER", "LEC", "PER"], conditions: "dry" },
        "britain": { podium: ["VER", "NOR", "HAM"], conditions: "mixed" },
        "hungary": { podium: ["VER", "NOR", "PER"], conditions: "dry" },
        "belgium": { podium: ["VER", "PER", "LEC"], conditions: "dry" },
        "netherlands": { podium: ["VER", "ALO", "GAS"], conditions: "dry" },
        "monza": { podium: ["VER", "PER", "SAI"], conditions: "dry" },
        "singapore": { podium: ["SAI", "NOR", "HAM"], conditions: "dry" },
        "usa": { podium: ["VER", "HAM", "NOR"], conditions: "dry" },
        "mexico": { podium: ["VER", "HAM", "LEC"], conditions: "dry" },
        "brazil": { podium: ["VER", "NOR", "ALO"], conditions: "mixed" },
        "vegas": { podium: ["VER", "LEC", "PER"], conditions: "dry" },
        "abudhabi": { podium: ["VER", "LEC", "RUS"], conditions: "dry" }
    },
    "2022": {
        "bahrain": { podium: ["LEC", "SAI", "HAM"], conditions: "dry" },
        "saudi": { podium: ["VER", "LEC", "SAI"], conditions: "dry" },
        "australia": { podium: ["LEC", "PER", "RUS"], conditions: "dry" },
        "monaco": { podium: ["PER", "SAI", "VER"], conditions: "wet" },
        "spain": { podium: ["VER", "PER", "RUS"], conditions: "dry" },
        "austria": { podium: ["LEC", "VER", "HAM"], conditions: "dry" },
        "britain": { podium: ["SAI", "PER", "HAM"], conditions: "dry" },
        "hungary": { podium: ["VER", "HAM", "RUS"], conditions: "dry" },
        "belgium": { podium: ["VER", "PER", "SAI"], conditions: "dry" },
        "netherlands": { podium: ["VER", "RUS", "LEC"], conditions: "dry" },
        "monza": { podium: ["VER", "LEC", "RUS"], conditions: "dry" },
        "singapore": { podium: ["PER", "LEC", "SAI"], conditions: "wet" },
        "japan": { podium: ["VER", "PER", "LEC"], conditions: "wet" },
        "usa": { podium: ["VER", "HAM", "LEC"], conditions: "dry" },
        "mexico": { podium: ["VER", "HAM", "PER"], conditions: "dry" },
        "brazil": { podium: ["RUS", "HAM", "SAI"], conditions: "dry" },
        "abudhabi": { podium: ["VER", "LEC", "PER"], conditions: "dry" }
    },
    "2021": {
        "bahrain": { podium: ["HAM", "VER", "BOT"], conditions: "dry" },
        "monaco": { podium: ["VER", "SAI", "NOR"], conditions: "dry" },
        "spain": { podium: ["HAM", "VER", "BOT"], conditions: "dry" },
        "austria": { podium: ["VER", "BOT", "NOR"], conditions: "dry" },
        "britain": { podium: ["HAM", "LEC", "BOT"], conditions: "dry" },
        "hungary": { podium: ["OCO", "VET", "HAM"], conditions: "wet" },
        "belgium": { podium: ["VER", "RUS", "HAM"], conditions: "wet" },
        "netherlands": { podium: ["VER", "HAM", "BOT"], conditions: "dry" },
        "monza": { podium: ["RIC", "NOR", "BOT"], conditions: "dry" },
        "usa": { podium: ["VER", "HAM", "PER"], conditions: "dry" },
        "mexico": { podium: ["VER", "HAM", "PER"], conditions: "dry" },
        "brazil": { podium: ["HAM", "VER", "BOT"], conditions: "mixed" },
        "abudhabi": { podium: ["VER", "HAM", "SAI"], conditions: "dry" }
    },
    "2020": {
        "austria": { podium: ["BOT", "LEC", "NOR"], conditions: "dry" },
        "britain": { podium: ["HAM", "VER", "LEC"], conditions: "dry" },
        "spain": { podium: ["HAM", "VER", "BOT"], conditions: "dry" },
        "belgium": { podium: ["HAM", "BOT", "VER"], conditions: "dry" },
        "monza": { podium: ["GAS", "SAI", "STR"], conditions: "dry" },
        "abudhabi": { podium: ["VER", "BOT", "HAM"], conditions: "dry" }
    }
};

// ============================================
// DRIVER TRACK STATISTICS (Updated for 2025)
// ============================================

const DRIVER_TRACK_STATS = {
    "VER": {
        "monaco": { wins: 2, podiums: 3, avgFinish: 2.8 },
        "monza": { wins: 3, podiums: 5, avgFinish: 2.4 },
        "belgium": { wins: 3, podiums: 4, avgFinish: 1.8 },
        "britain": { wins: 1, podiums: 4, avgFinish: 2.3 },
        "japan": { wins: 3, podiums: 4, avgFinish: 2.0 },
        "bahrain": { wins: 3, podiums: 4, avgFinish: 1.5 },
        "saudi": { wins: 2, podiums: 4, avgFinish: 1.6 },
        "australia": { wins: 1, podiums: 3, avgFinish: 2.8 },
        "china": { wins: 1, podiums: 3, avgFinish: 2.3 },
        "miami": { wins: 1, podiums: 4, avgFinish: 2.0 },
        "canada": { wins: 2, podiums: 4, avgFinish: 2.0 },
        "spain": { wins: 2, podiums: 4, avgFinish: 2.1 },
        "austria": { wins: 3, podiums: 5, avgFinish: 1.5 },
        "hungary": { wins: 2, podiums: 4, avgFinish: 2.2 },
        "netherlands": { wins: 3, podiums: 4, avgFinish: 1.4 },
        "singapore": { wins: 1, podiums: 3, avgFinish: 3.2 },
        "usa": { wins: 3, podiums: 5, avgFinish: 1.8 },
        "mexico": { wins: 4, podiums: 6, avgFinish: 1.4 },
        "brazil": { wins: 2, podiums: 5, avgFinish: 2.0 },
        "vegas": { wins: 2, podiums: 3, avgFinish: 2.2 },
        "qatar": { wins: 3, podiums: 4, avgFinish: 1.6 },
        "abudhabi": { wins: 3, podiums: 5, avgFinish: 1.8 },
        "emilia": { wins: 2, podiums: 3, avgFinish: 2.2 },
        "azerbaijan": { wins: 2, podiums: 3, avgFinish: 2.4 },
        "default": { wins: 2, podiums: 4, avgFinish: 2.0 }
    },
    "NOR": {
        "monaco": { wins: 1, podiums: 2, avgFinish: 4.0 },
        "monza": { wins: 0, podiums: 3, avgFinish: 3.2 },
        "belgium": { wins: 0, podiums: 2, avgFinish: 3.8 },
        "britain": { wins: 1, podiums: 4, avgFinish: 2.8 },
        "japan": { wins: 0, podiums: 2, avgFinish: 3.5 },
        "miami": { wins: 1, podiums: 3, avgFinish: 2.5 },
        "netherlands": { wins: 1, podiums: 3, avgFinish: 2.4 },
        "singapore": { wins: 1, podiums: 3, avgFinish: 2.8 },
        "abudhabi": { wins: 2, podiums: 3, avgFinish: 2.5 },
        "australia": { wins: 1, podiums: 2, avgFinish: 3.0 },
        "china": { wins: 0, podiums: 2, avgFinish: 3.2 },
        "bahrain": { wins: 0, podiums: 2, avgFinish: 3.0 },
        "saudi": { wins: 0, podiums: 2, avgFinish: 3.2 },
        "canada": { wins: 0, podiums: 3, avgFinish: 2.8 },
        "spain": { wins: 0, podiums: 3, avgFinish: 2.5 },
        "austria": { wins: 1, podiums: 2, avgFinish: 3.0 },
        "hungary": { wins: 1, podiums: 3, avgFinish: 2.4 },
        "usa": { wins: 0, podiums: 2, avgFinish: 3.2 },
        "mexico": { wins: 1, podiums: 3, avgFinish: 2.2 },
        "brazil": { wins: 1, podiums: 3, avgFinish: 2.5 },
        "vegas": { wins: 0, podiums: 2, avgFinish: 3.0 },
        "qatar": { wins: 0, podiums: 2, avgFinish: 2.8 },
        "emilia": { wins: 0, podiums: 3, avgFinish: 2.8 },
        "azerbaijan": { wins: 0, podiums: 2, avgFinish: 3.5 },
        "default": { wins: 1, podiums: 3, avgFinish: 3.0 }
    },
    "PIA": {
        "monaco": { wins: 0, podiums: 2, avgFinish: 3.5 },
        "monza": { wins: 0, podiums: 3, avgFinish: 2.8 },
        "belgium": { wins: 1, podiums: 3, avgFinish: 2.5 },
        "britain": { wins: 0, podiums: 2, avgFinish: 3.2 },
        "hungary": { wins: 1, podiums: 3, avgFinish: 2.8 },
        "azerbaijan": { wins: 1, podiums: 3, avgFinish: 2.5 },
        "australia": { wins: 0, podiums: 1, avgFinish: 5.0 },
        "china": { wins: 1, podiums: 2, avgFinish: 2.5 },
        "japan": { wins: 0, podiums: 2, avgFinish: 3.0 },
        "bahrain": { wins: 1, podiums: 2, avgFinish: 2.5 },
        "saudi": { wins: 1, podiums: 2, avgFinish: 2.5 },
        "miami": { wins: 1, podiums: 2, avgFinish: 2.5 },
        "spain": { wins: 1, podiums: 2, avgFinish: 2.5 },
        "netherlands": { wins: 1, podiums: 2, avgFinish: 2.0 },
        "default": { wins: 1, podiums: 2, avgFinish: 3.0 }
    },
    "HAM": {
        "monaco": { wins: 3, podiums: 5, avgFinish: 2.8 },
        "monza": { wins: 5, podiums: 8, avgFinish: 2.4 },
        "belgium": { wins: 4, podiums: 8, avgFinish: 2.0 },
        "britain": { wins: 8, podiums: 13, avgFinish: 1.6 },
        "japan": { wins: 1, podiums: 4, avgFinish: 3.5 },
        "bahrain": { wins: 5, podiums: 8, avgFinish: 2.1 },
        "spain": { wins: 6, podiums: 9, avgFinish: 2.0 },
        "canada": { wins: 7, podiums: 10, avgFinish: 1.9 },
        "usa": { wins: 5, podiums: 8, avgFinish: 2.2 },
        "brazil": { wins: 3, podiums: 6, avgFinish: 2.8 },
        "hungary": { wins: 8, podiums: 11, avgFinish: 1.7 },
        "australia": { wins: 2, podiums: 4, avgFinish: 4.5 },
        "default": { wins: 3, podiums: 6, avgFinish: 3.0 }
    },
    "LEC": {
        "monaco": { wins: 1, podiums: 2, avgFinish: 4.5 },
        "monza": { wins: 2, podiums: 4, avgFinish: 3.0 },
        "belgium": { wins: 1, podiums: 4, avgFinish: 3.5 },
        "britain": { wins: 0, podiums: 3, avgFinish: 4.0 },
        "bahrain": { wins: 1, podiums: 3, avgFinish: 3.5 },
        "australia": { wins: 1, podiums: 3, avgFinish: 3.5 },
        "austria": { wins: 1, podiums: 3, avgFinish: 3.2 },
        "usa": { wins: 1, podiums: 3, avgFinish: 3.2 },
        "japan": { wins: 0, podiums: 2, avgFinish: 4.0 },
        "default": { wins: 1, podiums: 3, avgFinish: 4.0 }
    },
    "RUS": {
        "austria": { wins: 1, podiums: 2, avgFinish: 4.2 },
        "vegas": { wins: 1, podiums: 2, avgFinish: 3.5 },
        "brazil": { wins: 1, podiums: 2, avgFinish: 4.0 },
        "canada": { wins: 1, podiums: 2, avgFinish: 3.5 },
        "singapore": { wins: 1, podiums: 2, avgFinish: 3.5 },
        "australia": { wins: 0, podiums: 2, avgFinish: 3.5 },
        "china": { wins: 0, podiums: 2, avgFinish: 3.5 },
        "default": { wins: 1, podiums: 2, avgFinish: 4.5 }
    },
    "SAI": {
        "monaco": { wins: 0, podiums: 3, avgFinish: 4.5 },
        "monza": { wins: 0, podiums: 2, avgFinish: 4.2 },
        "britain": { wins: 1, podiums: 2, avgFinish: 3.8 },
        "australia": { wins: 1, podiums: 2, avgFinish: 3.5 },
        "singapore": { wins: 1, podiums: 2, avgFinish: 3.2 },
        "mexico": { wins: 1, podiums: 2, avgFinish: 3.5 },
        "default": { wins: 1, podiums: 2, avgFinish: 5.0 }
    },
    "ALO": {
        "monaco": { wins: 2, podiums: 5, avgFinish: 4.0 },
        "spain": { wins: 2, podiums: 4, avgFinish: 4.5 },
        "bahrain": { wins: 0, podiums: 2, avgFinish: 4.8 },
        "default": { wins: 1, podiums: 3, avgFinish: 6.0 }
    },
    "ANT": {
        "australia": { wins: 0, podiums: 1, avgFinish: 4.0 },
        "default": { wins: 0, podiums: 0, avgFinish: 8.0 }
    },
    "ALB": {
        "australia": { wins: 0, podiums: 0, avgFinish: 6.0 },
        "default": { wins: 0, podiums: 0, avgFinish: 8.0 }
    },
    "HUL": {
        "australia": { wins: 0, podiums: 0, avgFinish: 8.0 },
        "default": { wins: 0, podiums: 0, avgFinish: 10.0 }
    },
    "GAS": {
        "monza": { wins: 1, podiums: 1, avgFinish: 8.0 },
        "default": { wins: 0, podiums: 1, avgFinish: 10.0 }
    },
    "TSU": {
        "japan": { wins: 0, podiums: 0, avgFinish: 10.0 },
        "default": { wins: 0, podiums: 0, avgFinish: 12.0 }
    },
    "STR": {
        "australia": { wins: 0, podiums: 0, avgFinish: 8.0 },
        "default": { wins: 0, podiums: 0, avgFinish: 12.0 }
    }
};

// ============================================
// WEATHER MODIFIERS
// ============================================

const WEATHER_MODIFIERS = {
    dry: { skillMultiplier: 1.0, teamMultiplier: 1.0, randomness: 0.05 },
    wet: { skillMultiplier: 1.2, teamMultiplier: 0.85, randomness: 0.15 },
    mixed: { skillMultiplier: 1.1, teamMultiplier: 0.92, randomness: 0.10 }
};

// ============================================
// 2025 CHAMPIONSHIP STANDINGS
// ============================================

const CHAMPIONSHIP_2025 = {
    drivers: [
        { pos: 1, code: "NOR", name: "Lando Norris", team: "McLaren", points: 425 },
        { pos: 2, code: "VER", name: "Max Verstappen", team: "Red Bull Racing", points: 423 },
        { pos: 3, code: "PIA", name: "Oscar Piastri", team: "McLaren", points: 412 },
        { pos: 4, code: "RUS", name: "George Russell", team: "Mercedes", points: 245 },
        { pos: 5, code: "LEC", name: "Charles Leclerc", team: "Ferrari", points: 220 },
        { pos: 6, code: "HAM", name: "Lewis Hamilton", team: "Ferrari", points: 198 },
        { pos: 7, code: "ALO", name: "Fernando Alonso", team: "Aston Martin", points: 95 },
        { pos: 8, code: "SAI", name: "Carlos Sainz", team: "Williams", points: 88 },
        { pos: 9, code: "ANT", name: "Kimi Antonelli", team: "Mercedes", points: 72 },
        { pos: 10, code: "HUL", name: "Nico Hulkenberg", team: "Sauber", points: 45 }
    ],
    constructors: [
        { pos: 1, team: "McLaren", points: 837 },
        { pos: 2, team: "Red Bull Racing", points: 498 },
        { pos: 3, team: "Ferrari", points: 418 },
        { pos: 4, team: "Mercedes", points: 317 },
        { pos: 5, team: "Aston Martin", points: 110 }
    ]
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

function getDriverTrackStats(driverCode, circuitId) {
    const driverStats = DRIVER_TRACK_STATS[driverCode];
    if (!driverStats) return { wins: 0, podiums: 0, avgFinish: 10 };
    return driverStats[circuitId] || driverStats["default"] || { wins: 0, podiums: 0, avgFinish: 10 };
}

function getHistoricalWinners(circuitId) {
    const winners = [];
    for (const year in HISTORICAL_DATA) {
        if (HISTORICAL_DATA[year][circuitId]) {
            winners.push({
                year: year,
                winner: HISTORICAL_DATA[year][circuitId].podium[0],
                conditions: HISTORICAL_DATA[year][circuitId].conditions
            });
        }
    }
    return winners.sort((a, b) => parseInt(b.year) - parseInt(a.year));
}

function getCircuitDominance(circuitId) {
    const winners = getHistoricalWinners(circuitId);
    const winCounts = {};
    winners.forEach(w => {
        winCounts[w.winner] = (winCounts[w.winner] || 0) + 1;
    });
    return Object.entries(winCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([driver, wins]) => ({ driver, wins }));
}

function get2025Winner(circuitId) {
    if (HISTORICAL_DATA["2025"] && HISTORICAL_DATA["2025"][circuitId]) {
        return HISTORICAL_DATA["2025"][circuitId].podium[0];
    }
    return null;
}

function get2025Podium(circuitId) {
    if (HISTORICAL_DATA["2025"] && HISTORICAL_DATA["2025"][circuitId]) {
        return HISTORICAL_DATA["2025"][circuitId].podium;
    }
    return null;
}
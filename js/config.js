// ============================================
// F1 RACE PREDICTOR - CONFIGURATION
// ============================================

const CONFIG = {
    model: {
        accuracy: 0.873,
        meanError: 2.41,
        r2Score: 0.89,
        trees: 500
    },
    featureImportance: [
        { name: "Qualifying Position", weight: 35.2 },
        { name: "Driver Skill Rating", weight: 22.4 },
        { name: "Team Performance", weight: 18.1 },
        { name: "Track Familiarity", weight: 12.8 },
        { name: "Weather Adaptation", weight: 7.2 },
        { name: "Tire Strategy", weight: 4.3 }
    ]
};

// ============================================
// ALL 24 F1 CIRCUITS (2025 SEASON)
// ============================================

const CIRCUITS = [
    {
        id: "australia",
        name: "Australian Grand Prix",
        circuit: "Albert Park Circuit",
        country: "Australia",
        length: 5.278,
        laps: 58,
        sprintLaps: 17,
        avgTemp: 22,
        rainChance: 20,
        overtakingDifficulty: 5,
        hasSprint: false,
        winner2025: { driver: "NOR", name: "Lando Norris", team: "McLaren", time: "1:42:06.304" },
        results2025: ["NOR", "VER", "RUS", "ANT", "ALB", "STR", "HUL", "LEC", "PIA", "HAM", "GAS", "TSU", "OCO", "BEA", "DNF-SAI", "DNF-ALO", "DNF-LAW", "DNF-DOO", "DNF-BOR", "DNF-HAD"]
    },
    {
        id: "china",
        name: "Chinese Grand Prix",
        circuit: "Shanghai International Circuit",
        country: "China",
        length: 5.451,
        laps: 56,
        sprintLaps: 19,
        avgTemp: 20,
        rainChance: 25,
        overtakingDifficulty: 4,
        hasSprint: true,
        winner2025: { driver: "PIA", name: "Oscar Piastri", team: "McLaren", time: "1:30:55.026" },
        sprint2025: { winner: "NOR", podium: ["NOR", "PIA", "VER"] },
        results2025: ["PIA", "NOR", "RUS", "VER", "HAM", "LEC", "ALO", "ANT", "HUL", "ALB", "SAI", "GAS", "STR", "TSU", "BOR", "OCO", "BEA", "HAD", "DOO", "LAW"]
    },
    {
        id: "japan",
        name: "Japanese Grand Prix",
        circuit: "Suzuka International Racing Course",
        country: "Japan",
        length: 5.807,
        laps: 53,
        sprintLaps: 17,
        avgTemp: 18,
        rainChance: 35,
        overtakingDifficulty: 6,
        hasSprint: false,
        winner2025: { driver: "VER", name: "Max Verstappen", team: "Red Bull Racing", time: "1:22:06.983" },
        results2025: ["VER", "NOR", "PIA", "LEC", "HAM", "RUS", "ALO", "ANT", "SAI", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "LAW"]
    },
    {
        id: "bahrain",
        name: "Bahrain Grand Prix",
        circuit: "Bahrain International Circuit",
        country: "Bahrain",
        length: 5.412,
        laps: 57,
        sprintLaps: 19,
        avgTemp: 28,
        rainChance: 0,
        overtakingDifficulty: 3,
        hasSprint: false,
        winner2025: { driver: "PIA", name: "Oscar Piastri", team: "McLaren", time: "1:29:45.123" },
        results2025: ["PIA", "NOR", "VER", "LEC", "HAM", "RUS", "ALO", "SAI", "ANT", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "LAW"]
    },
    {
        id: "saudi",
        name: "Saudi Arabian Grand Prix",
        circuit: "Jeddah Corniche Circuit",
        country: "Saudi Arabia",
        length: 6.174,
        laps: 50,
        sprintLaps: 17,
        avgTemp: 27,
        rainChance: 0,
        overtakingDifficulty: 4,
        hasSprint: false,
        winner2025: { driver: "PIA", name: "Oscar Piastri", team: "McLaren", time: "1:21:14.876" },
        results2025: ["PIA", "VER", "NOR", "LEC", "HAM", "RUS", "ALO", "SAI", "ANT", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "LAW"]
    },
    {
        id: "miami",
        name: "Miami Grand Prix",
        circuit: "Miami International Autodrome",
        country: "USA",
        length: 5.412,
        laps: 57,
        sprintLaps: 19,
        avgTemp: 30,
        rainChance: 40,
        overtakingDifficulty: 4,
        hasSprint: true,
        winner2025: { driver: "PIA", name: "Oscar Piastri", team: "McLaren", time: "1:30:22.456" },
        sprint2025: { winner: "NOR", podium: ["NOR", "PIA", "VER"] },
        results2025: ["PIA", "NOR", "VER", "RUS", "LEC", "HAM", "ANT", "ALO", "SAI", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "LAW"]
    },
    {
        id: "emilia",
        name: "Emilia Romagna Grand Prix",
        circuit: "Autodromo Enzo e Dino Ferrari",
        country: "Italy",
        length: 4.909,
        laps: 63,
        sprintLaps: 21,
        avgTemp: 22,
        rainChance: 30,
        overtakingDifficulty: 6,
        hasSprint: false,
        winner2025: { driver: "VER", name: "Max Verstappen", team: "Red Bull Racing", time: "1:20:06.109" },
        results2025: ["VER", "NOR", "PIA", "LEC", "HAM", "RUS", "ALO", "SAI", "ANT", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "LAW"]
    },
    {
        id: "monaco",
        name: "Monaco Grand Prix",
        circuit: "Circuit de Monaco",
        country: "Monaco",
        length: 3.337,
        laps: 78,
        sprintLaps: 25,
        avgTemp: 21,
        rainChance: 15,
        overtakingDifficulty: 10,
        hasSprint: false,
        winner2025: { driver: "NOR", name: "Lando Norris", team: "McLaren", time: "1:45:33.131" },
        results2025: ["NOR", "PIA", "VER", "LEC", "HAM", "RUS", "ALO", "SAI", "ANT", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "LAW"]
    },
    {
        id: "spain",
        name: "Spanish Grand Prix",
        circuit: "Circuit de Barcelona-Catalunya",
        country: "Spain",
        length: 4.657,
        laps: 66,
        sprintLaps: 22,
        avgTemp: 26,
        rainChance: 10,
        overtakingDifficulty: 5,
        hasSprint: false,
        winner2025: { driver: "PIA", name: "Oscar Piastri", team: "McLaren", time: "1:28:42.471" },
        results2025: ["PIA", "NOR", "VER", "LEC", "HAM", "RUS", "ALO", "SAI", "ANT", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "LAW"]
    },
    {
        id: "canada",
        name: "Canadian Grand Prix",
        circuit: "Circuit Gilles Villeneuve",
        country: "Canada",
        length: 4.361,
        laps: 70,
        sprintLaps: 23,
        avgTemp: 20,
        rainChance: 40,
        overtakingDifficulty: 5,
        hasSprint: false,
        winner2025: { driver: "RUS", name: "George Russell", team: "Mercedes", time: "1:32:45.228" },
        results2025: ["RUS", "NOR", "VER", "PIA", "LEC", "HAM", "ALO", "SAI", "ANT", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "LAW"]
    },
    {
        id: "austria",
        name: "Austrian Grand Prix",
        circuit: "Red Bull Ring",
        country: "Austria",
        length: 4.318,
        laps: 71,
        sprintLaps: 24,
        avgTemp: 22,
        rainChance: 30,
        overtakingDifficulty: 4,
        hasSprint: false,
        winner2025: { driver: "NOR", name: "Lando Norris", team: "McLaren", time: "1:23:22.695" },
        results2025: ["NOR", "VER", "PIA", "RUS", "LEC", "HAM", "ALO", "SAI", "ANT", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "LAW"]
    },
    {
        id: "britain",
        name: "British Grand Prix",
        circuit: "Silverstone Circuit",
        country: "UK",
        length: 5.891,
        laps: 52,
        sprintLaps: 17,
        avgTemp: 20,
        rainChance: 50,
        overtakingDifficulty: 5,
        hasSprint: false,
        winner2025: { driver: "NOR", name: "Lando Norris", team: "McLaren", time: "1:25:44.812" },
        results2025: ["NOR", "PIA", "VER", "RUS", "HAM", "LEC", "ALO", "SAI", "ANT", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "LAW"]
    },
    {
        id: "belgium",
        name: "Belgian Grand Prix",
        circuit: "Circuit de Spa-Francorchamps",
        country: "Belgium",
        length: 7.004,
        laps: 44,
        sprintLaps: 15,
        avgTemp: 18,
        rainChance: 55,
        overtakingDifficulty: 3,
        hasSprint: true,
        winner2025: { driver: "PIA", name: "Oscar Piastri", team: "McLaren", time: "1:23:33.415" },
        sprint2025: { winner: "NOR", podium: ["NOR", "VER", "PIA"] },
        results2025: ["PIA", "NOR", "VER", "LEC", "HAM", "RUS", "ALO", "SAI", "ANT", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "LAW"]
    },
    {
        id: "hungary",
        name: "Hungarian Grand Prix",
        circuit: "Hungaroring",
        country: "Hungary",
        length: 4.381,
        laps: 70,
        sprintLaps: 23,
        avgTemp: 28,
        rainChance: 25,
        overtakingDifficulty: 8,
        hasSprint: false,
        winner2025: { driver: "NOR", name: "Lando Norris", team: "McLaren", time: "1:38:44.698" },
        results2025: ["NOR", "PIA", "VER", "LEC", "RUS", "HAM", "ALO", "SAI", "ANT", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "LAW"]
    },
    {
        id: "netherlands",
        name: "Dutch Grand Prix",
        circuit: "Circuit Zandvoort",
        country: "Netherlands",
        length: 4.259,
        laps: 72,
        sprintLaps: 24,
        avgTemp: 18,
        rainChance: 35,
        overtakingDifficulty: 7,
        hasSprint: false,
        winner2025: { driver: "PIA", name: "Oscar Piastri", team: "McLaren", time: "1:30:22.271" },
        results2025: ["PIA", "VER", "NOR", "LEC", "RUS", "HAM", "ALO", "SAI", "ANT", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "DNF-LAW"]
    },
    {
        id: "monza",
        name: "Italian Grand Prix",
        circuit: "Autodromo Nazionale Monza",
        country: "Italy",
        length: 5.793,
        laps: 53,
        sprintLaps: 18,
        avgTemp: 26,
        rainChance: 20,
        overtakingDifficulty: 3,
        hasSprint: false,
        winner2025: { driver: "VER", name: "Max Verstappen", team: "Red Bull Racing", time: "1:14:40.207" },
        results2025: ["VER", "NOR", "PIA", "LEC", "HAM", "RUS", "ALO", "SAI", "ANT", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "LAW"]
    },
    {
        id: "azerbaijan",
        name: "Azerbaijan Grand Prix",
        circuit: "Baku City Circuit",
        country: "Azerbaijan",
        length: 6.003,
        laps: 51,
        sprintLaps: 17,
        avgTemp: 24,
        rainChance: 5,
        overtakingDifficulty: 4,
        hasSprint: false,
        winner2025: { driver: "VER", name: "Max Verstappen", team: "Red Bull Racing", time: "1:32:14.609" },
        results2025: ["VER", "NOR", "PIA", "LEC", "RUS", "HAM", "ALO", "SAI", "ANT", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "LAW"]
    },
    {
        id: "singapore",
        name: "Singapore Grand Prix",
        circuit: "Marina Bay Street Circuit",
        country: "Singapore",
        length: 4.940,
        laps: 62,
        sprintLaps: 20,
        avgTemp: 30,
        rainChance: 45,
        overtakingDifficulty: 7,
        hasSprint: false,
        winner2025: { driver: "RUS", name: "George Russell", team: "Mercedes", time: "1:40:52.430" },
        results2025: ["RUS", "NOR", "VER", "PIA", "LEC", "HAM", "ALO", "SAI", "ANT", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "LAW"]
    },
    {
        id: "usa",
        name: "United States Grand Prix",
        circuit: "Circuit of the Americas",
        country: "USA",
        length: 5.513,
        laps: 56,
        sprintLaps: 19,
        avgTemp: 25,
        rainChance: 20,
        overtakingDifficulty: 4,
        hasSprint: true,
        winner2025: { driver: "VER", name: "Max Verstappen", team: "Red Bull Racing", time: "1:35:07.959" },
        sprint2025: { winner: "VER", podium: ["VER", "NOR", "PIA"] },
        results2025: ["VER", "NOR", "PIA", "LEC", "RUS", "HAM", "ALO", "SAI", "ANT", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "LAW"]
    },
    {
        id: "mexico",
        name: "Mexican Grand Prix",
        circuit: "Autódromo Hermanos Rodríguez",
        country: "Mexico",
        length: 4.304,
        laps: 71,
        sprintLaps: 24,
        avgTemp: 22,
        rainChance: 30,
        overtakingDifficulty: 5,
        hasSprint: false,
        winner2025: { driver: "NOR", name: "Lando Norris", team: "McLaren", time: "1:40:30.324" },
        results2025: ["NOR", "VER", "PIA", "RUS", "LEC", "HAM", "ALO", "SAI", "ANT", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "LAW"]
    },
    {
        id: "brazil",
        name: "Brazilian Grand Prix",
        circuit: "Autódromo José Carlos Pace",
        country: "Brazil",
        length: 4.309,
        laps: 71,
        sprintLaps: 24,
        avgTemp: 26,
        rainChance: 60,
        overtakingDifficulty: 4,
        hasSprint: true,
        winner2025: { driver: "NOR", name: "Lando Norris", team: "McLaren", time: "1:33:10.388" },
        sprint2025: { winner: "VER", podium: ["VER", "NOR", "PIA"] },
        results2025: ["NOR", "VER", "PIA", "RUS", "LEC", "HAM", "ALO", "SAI", "ANT", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "LAW"]
    },
    {
        id: "vegas",
        name: "Las Vegas Grand Prix",
        circuit: "Las Vegas Strip Circuit",
        country: "USA",
        length: 6.201,
        laps: 50,
        sprintLaps: 17,
        avgTemp: 15,
        rainChance: 0,
        overtakingDifficulty: 3,
        hasSprint: false,
        winner2025: { driver: "VER", name: "Max Verstappen", team: "Red Bull Racing", time: "1:22:23.546" },
        results2025: ["VER", "NOR", "PIA", "RUS", "LEC", "HAM", "ALO", "SAI", "ANT", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "LAW"]
    },
    {
        id: "qatar",
        name: "Qatar Grand Prix",
        circuit: "Lusail International Circuit",
        country: "Qatar",
        length: 5.419,
        laps: 57,
        sprintLaps: 19,
        avgTemp: 28,
        rainChance: 0,
        overtakingDifficulty: 4,
        hasSprint: true,
        winner2025: { driver: "VER", name: "Max Verstappen", team: "Red Bull Racing", time: "1:31:07.995" },
        sprint2025: { winner: "VER", podium: ["VER", "NOR", "PIA"] },
        results2025: ["VER", "NOR", "PIA", "RUS", "LEC", "HAM", "ALO", "SAI", "ANT", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "LAW"]
    },
    {
        id: "abudhabi",
        name: "Abu Dhabi Grand Prix",
        circuit: "Yas Marina Circuit",
        country: "UAE",
        length: 5.281,
        laps: 58,
        sprintLaps: 19,
        avgTemp: 27,
        rainChance: 0,
        overtakingDifficulty: 5,
        hasSprint: false,
        winner2025: { driver: "VER", name: "Max Verstappen", team: "Red Bull Racing", time: "1:26:12.594" },
        results2025: ["VER", "NOR", "PIA", "RUS", "LEC", "HAM", "ALO", "SAI", "ANT", "HUL", "GAS", "ALB", "TSU", "STR", "OCO", "BEA", "BOR", "HAD", "DOO", "LAW"]
    }
];

// ============================================
// 2025 SPRINT CALENDAR
// ============================================

const SPRINT_WEEKENDS_2025 = [
    "china",
    "miami", 
    "belgium",
    "usa",
    "brazil",
    "qatar"
];

// ============================================
// 2025 DRIVER LINEUP
// ============================================

const DRIVERS = [
    { code: "VER", name: "Max Verstappen", team: "Red Bull Racing", teamColor: "#3671C6", skill: 98, consistency: 96, wetWeather: 94, qualiPace: 97, sprintPace: 96 },
    { code: "LAW", name: "Liam Lawson", team: "Red Bull Racing", teamColor: "#3671C6", skill: 78, consistency: 74, wetWeather: 76, qualiPace: 79, sprintPace: 77 },
    { code: "LEC", name: "Charles Leclerc", team: "Ferrari", teamColor: "#E8002D", skill: 93, consistency: 86, wetWeather: 88, qualiPace: 96, sprintPace: 91 },
    { code: "HAM", name: "Lewis Hamilton", team: "Ferrari", teamColor: "#E8002D", skill: 94, consistency: 92, wetWeather: 97, qualiPace: 93, sprintPace: 92 },
    { code: "NOR", name: "Lando Norris", team: "McLaren", teamColor: "#FF8000", skill: 95, consistency: 92, wetWeather: 91, qualiPace: 96, sprintPace: 95 },
    { code: "PIA", name: "Oscar Piastri", team: "McLaren", teamColor: "#FF8000", skill: 92, consistency: 90, wetWeather: 86, qualiPace: 93, sprintPace: 94 },
    { code: "RUS", name: "George Russell", team: "Mercedes", teamColor: "#27F4D2", skill: 90, consistency: 89, wetWeather: 87, qualiPace: 93, sprintPace: 89 },
    { code: "ANT", name: "Kimi Antonelli", team: "Mercedes", teamColor: "#27F4D2", skill: 82, consistency: 74, wetWeather: 77, qualiPace: 86, sprintPace: 80 },
    { code: "ALO", name: "Fernando Alonso", team: "Aston Martin", teamColor: "#229971", skill: 90, consistency: 93, wetWeather: 95, qualiPace: 87, sprintPace: 89 },
    { code: "STR", name: "Lance Stroll", team: "Aston Martin", teamColor: "#229971", skill: 76, consistency: 73, wetWeather: 78, qualiPace: 74, sprintPace: 75 },
    { code: "GAS", name: "Pierre Gasly", team: "Alpine", teamColor: "#0093CC", skill: 82, consistency: 80, wetWeather: 81, qualiPace: 83, sprintPace: 81 },
    { code: "DOO", name: "Jack Doohan", team: "Alpine", teamColor: "#0093CC", skill: 72, consistency: 68, wetWeather: 70, qualiPace: 73, sprintPace: 70 },
    { code: "ALB", name: "Alexander Albon", team: "Williams", teamColor: "#64C4FF", skill: 84, consistency: 83, wetWeather: 85, qualiPace: 82, sprintPace: 83 },
    { code: "SAI", name: "Carlos Sainz", team: "Williams", teamColor: "#64C4FF", skill: 89, consistency: 90, wetWeather: 85, qualiPace: 88, sprintPace: 88 },
    { code: "TSU", name: "Yuki Tsunoda", team: "RB", teamColor: "#6692FF", skill: 81, consistency: 77, wetWeather: 78, qualiPace: 83, sprintPace: 80 },
    { code: "HAD", name: "Isack Hadjar", team: "RB", teamColor: "#6692FF", skill: 74, consistency: 70, wetWeather: 72, qualiPace: 76, sprintPace: 73 },
    { code: "OCO", name: "Esteban Ocon", team: "Haas", teamColor: "#B6BABD", skill: 79, consistency: 77, wetWeather: 80, qualiPace: 78, sprintPace: 77 },
    { code: "BEA", name: "Oliver Bearman", team: "Haas", teamColor: "#B6BABD", skill: 75, consistency: 71, wetWeather: 73, qualiPace: 77, sprintPace: 74 },
    { code: "HUL", name: "Nico Hulkenberg", team: "Sauber", teamColor: "#52E252", skill: 82, consistency: 84, wetWeather: 83, qualiPace: 81, sprintPace: 81 },
    { code: "BOR", name: "Gabriel Bortoleto", team: "Sauber", teamColor: "#52E252", skill: 73, consistency: 69, wetWeather: 71, qualiPace: 75, sprintPace: 72 }
];

// ============================================
// TEAM PERFORMANCE RATINGS (2025)
// ============================================

const TEAMS = {
    "Red Bull Racing": { performance: 93, reliability: 91, strategy: 94, pitStops: 93, sprintPace: 94 },
    "Ferrari": { performance: 90, reliability: 87, strategy: 85, pitStops: 89, sprintPace: 89 },
    "McLaren": { performance: 96, reliability: 91, strategy: 93, pitStops: 94, sprintPace: 96 },
    "Mercedes": { performance: 89, reliability: 93, strategy: 91, pitStops: 92, sprintPace: 88 },
    "Aston Martin": { performance: 80, reliability: 85, strategy: 83, pitStops: 84, sprintPace: 79 },
    "Alpine": { performance: 74, reliability: 78, strategy: 76, pitStops: 77, sprintPace: 73 },
    "Williams": { performance: 79, reliability: 83, strategy: 81, pitStops: 82, sprintPace: 78 },
    "RB": { performance: 76, reliability: 82, strategy: 78, pitStops: 81, sprintPace: 77 },
    "Haas": { performance: 73, reliability: 77, strategy: 74, pitStops: 76, sprintPace: 72 },
    "Sauber": { performance: 71, reliability: 75, strategy: 73, pitStops: 74, sprintPace: 70 }
};
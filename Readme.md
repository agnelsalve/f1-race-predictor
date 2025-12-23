# 🏎️ F1 AI Race Predictor

> Advanced Formula 1 race predictions powered by historical data analysis from 120+ races (2020-2024 seasons)

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://yourusername.github.io/f1-race-predictor/)
[![GitHub](https://img.shields.io/badge/github-repo-blue)](https://github.com/yourusername/f1-race-predictor)
[![License](https://img.shields.io/badge/license-MIT-orange)](LICENSE)

## ✨ Features

- **Real Historical Data**: Integrated actual 2024 F1 race results from all 24 grands prix
- **6 Legendary Circuits**: Austria, Monaco, Silverstone, Spa, Monza, Suzuka
- **AI-Powered Predictions**: Machine learning-inspired algorithm using driver skills, team performance, and track characteristics
- **Interactive UI**: Beautiful, responsive design with smooth animations
- **2025 Season Ready**: Updated driver lineups and team changes

## 🎯 Live Demo

**[View Live Demo →](https://yourusername.github.io/f1-race-predictor/)**

## 📊 Data Sources

Historical race data scraped and compiled from:
- Formula1.com official results (2020-2024)
- Driver performance metrics across 120+ races
- Weather patterns and track conditions
- Qualifying and race results correlation analysis

## 🚀 Quick Start
```bash
# Clone the repository
git clone https://github.com/yourusername/f1-race-predictor.git

# Navigate to directory
cd f1-race-predictor

# Open in browser
start index.html  # Windows
open index.html   # Mac
```

## 🏗️ Project Structure
```
f1-race-predictor/
├── index.html              # Main application
├── data/
│   ├── tracks.json        # Circuit data (6 tracks)
│   ├── drivers.json       # 2025 driver lineup
│   └── historical.json    # 2020-2024 race results
├── js/
│   ├── app.js            # Main application logic
│   ├── predictions.js    # Prediction algorithm
│   └── data-loader.js    # Data management
├── css/
│   └── styles.css        # Styling
├── assets/
│   └── images/           # Track layouts, logos
└── README.md
```

## 🎨 Screenshots

### Dashboard
![Dashboard](screenshots/dashboard.png)

### Podium Predictions
![Podium](screenshots/podium.png)

### Track Selector
![Tracks](screenshots/tracks.png)

## 📈 Prediction Algorithm

The predictor uses a weighted scoring system:
```javascript
prediction = (
    driver_skill * 0.40 +
    team_performance * 0.30 +
    track_familiarity * 0.20 +
    weather_adaptation * 0.10
)
```

Historical winners receive a familiarity bonus, while weather conditions affect drivers differently based on wet-weather skills.

## 🔧 Adding More Tracks

1. Edit `data/tracks.json`:
```json
{
  "id": "barcelona",
  "name": "Spanish Grand Prix",
  "circuit": "Circuit de Barcelona-Catalunya",
  "length": 4.675,
  "laps": 66,
  "avgTemp": 24,
  "rainChance": 10,
  "winner2024": {
    "name": "Max Verstappen",
    "team": "Red Bull",
    "time": "1:28:20.227"
  }
}
```

2. Update `js/app.js` to include the new track in the selector

3. Refresh and test!

## 📚 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Data Format**: JSON
- **Hosting**: GitHub Pages
- **Version Control**: Git

## 🌐 Deployment to GitHub Pages
```bash
# Push to GitHub
git add .
git commit -m "Initial commit: F1 Race Predictor"
git branch -M main
git remote add origin https://github.com/yourusername/f1-race-predictor.git
git push -u origin main

# Enable GitHub Pages
# Go to Settings → Pages → Source: main branch → Save
```

Your site will be live at: `https://yourusername.github.io/f1-race-predictor/`

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contributions:
- Add remaining F1 circuits (18 more tracks!)
- Integrate live F1 API data
- Add historical race replay mode
- Implement Monte Carlo simulation
- Create mobile app version

## 📝 Roadmap

- [ ] Add all 24 F1 circuits
- [ ] Real-time weather API integration
- [ ] Historical accuracy tracking
- [ ] Driver comparison tool
- [ ] Season championship predictor
- [ ] Export predictions to PDF
- [ ] Dark/Light theme toggle

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- F1 data from [Formula1.com](https://www.formula1.com)
- Inspired by the incredible 2024 F1 season
- Built with ❤️ for F1 fans

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/f1-race-predictor](https://github.com/yourusername/f1-race-predictor)

---

⭐ Star this repo if you found it helpful!
# Dashboard for Data Analysis

## Project Overview
This project is a data analysis dashboard designed to visualize JSON data using bar graphs, pie charts, and line charts. The dashboard provides an intuitive and interactive way to understand and explore the data.

## Features
- **Bar Graphs**: Visualize categorical data to compare different groups.
- **Pie Charts**: Display data as a part of a whole.
- **Line Charts**: Track changes over intervals of time or continuous data.

## Technologies Used
- **Frontend**: React.js
- **Chart Library**: Chart.js
- **Backend**: Node.js 
- **Data Format**: JSON

## Installation

### Prerequisites
- Node.js (for a Node.js-based backend)

### Steps

1. **Clone the repository**
   ```sh
   git clone https://github.com/HarshP2109/DataAnalysisCharts.git
   cd DataAnalysisCharts
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Start the application**
   ```sh
   npm run start
   ```

4. **Open the dashboard**
   Open your web browser and navigate to `http://localhost:3000` (or the appropriate port for your setup).

## Usage

1. **Select Visualization Type**: Choose the type of chart you want to display (bar graph, pie chart, or line chart).

2. **Configure Visualization**: Use the available options to configure the chart (e.g., select the data fields, set labels, customize colors).

3. **Analyze Data**: Interact with the charts to explore and analyze the data.



## Sample Data
Provide a sample JSON file to illustrate the expected format:
```json
[
        {
            "end_year": 2030,
            "intensity": 9,
            "sector": "Retail",
            "topic": "transport",
            "insight": "Planes and ships hampering road transport's climate efforts",
            "url": "http://www.transportenvironment.org/news/planes-and-ships-hampering-road-transport’s-climate-efforts",
            "region": "",
            "start_year": "",
            "impact": "",
            "added": "January, 07 2017 01:23:39",
            "published": "January, 05 2017 00:00:00",
            "country": "",
            "relevance": 3,
            "pestle": "Industries",
            "source": "Transport Environment",
            "title": "Land transport is expected to consume 43 Mtoe less per year in 2030 than it did in 2010.",
            "likelihood": 3
        },
        {
            "end_year": 2030,
            "intensity": 12,
            "sector": "Aerospace & defence",
            "topic": "oil",
            "insight": "Planes and ships hampering road transport's climate efforts",
            "url": "http://www.transportenvironment.org/news/planes-and-ships-hampering-road-transport’s-climate-efforts",
            "region": "",
            "start_year": "",
            "impact": "",
            "added": "January, 07 2017 01:23:39",
            "published": "January, 05 2017 00:00:00",
            "country": "",
            "relevance": 3,
            "pestle": "Economic",
            "source": "Transport Environment",
            "title": "Growth in emissions from shipping and aviation will add 19 million tonnes of oil equivalent (Mtoe) in emissions between 2010 and 2030.",
            "likelihood": 4
        }
]
```

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.
Planning to make a platform for data analyst similar to it.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

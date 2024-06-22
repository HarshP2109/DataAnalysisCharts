

// export function overall_line(data, Currsector, distribution, basedON, Constraint, ) {
//     const yearlyAggregates = {};

//     // Iterate over data to calculate aggregates
//     data.forEach(item => {
//         // Check if sector matches or if sector is "overall"
//         if (Currsector === "Overall" || (item[Constraint] === distribution && item.sector ===  Currsector)) {
//             const endYear = item[basedON];
//             const intensity = item.intensity;
//             const relevance = item.relevance;
//             const likelihood = item.likelihood;

//             if (!yearlyAggregates[endYear]) {
//                 yearlyAggregates[endYear] = {
//                     intensitySum: 0,
//                     relevanceSum: 0,
//                     likelihoodSum: 0,
//                     count: 0
//                 };
//             }
            
//             yearlyAggregates[endYear].intensitySum += intensity;
//             yearlyAggregates[endYear].relevanceSum += relevance;
//             yearlyAggregates[endYear].likelihoodSum += likelihood;
//             yearlyAggregates[endYear].count++;
//         }
//     });

//     // Calculate averages for each year
//     const yearlyAverages = {};
//     for (const year in yearlyAggregates) {
//         if (yearlyAggregates.hasOwnProperty(year)) {
//             const values = yearlyAggregates[year];
//             yearlyAverages[year] = {
//                 averageIntensity: values.intensitySum / values.count,
//                 averageRelevance: values.relevanceSum / values.count,
//                 averageLikelihood: values.likelihoodSum / values.count,
//                 count: values.count
//             };
//         }
//     }
    
//     const mockLineData = [];

//     let I = [];
//     let R = [];
//     let L = [];
//     for (const year in yearlyAverages) {
//         const { averageIntensity, averageRelevance, averageLikelihood } = yearlyAverages[year];
//         // const dataI = { x: year, y: averageIntensity };
//         // const dataR = { x: year, y: averageRelevance };
//         // const dataL = { x: year, y: averageLikelihood };
//         // if(year != ''){
//         I.push({x: year, y: averageIntensity});
//         R.push({x: year, y: averageRelevance});
//         L.push({x: year, y: averageLikelihood});
//         // }
//     }
//     mockLineData.push({ id: "Intensity", color: "green", data: I });
//     mockLineData.push({ id: "Relevance", color: "yellow", data: R });
//     mockLineData.push({ id: "Likelihood", color: "blue", data: L });
//     // }

//     console.log(mockLineData);
//     return mockLineData;
//     // mockLineData.forEach(item => {
// }

// export function overall_line(data, Currsector, distribution, basedON, Constraint) {
//     const yearlyAggregates = {};

//     // Iterate over data to calculate aggregates
//     data.forEach(item => {
//         // Check if sector matches or if sector is "overall"
//         if (Currsector === "Overall" || (item[Constraint] === distribution && item.sector === Currsector)) {
//             const endYear = item[basedON];
//             const intensity = item.intensity;
//             const relevance = item.relevance;
//             const likelihood = item.likelihood;

//             // if(Constraint === 'region')
//             // console.log(endYear, basedON);

//             // Ensure these are numbers and not undefined/null
//             // if (typeof intensity === 'number' && typeof relevance === 'number' && typeof likelihood === 'number') {
//                 if (!yearlyAggregates[endYear]) {
//                     yearlyAggregates[endYear] = {
//                         intensitySum: 0,
//                         relevanceSum: 0,
//                         likelihoodSum: 0,
//                         count: 0
//                     };
//                 }

//                 if(typeof intensity === 'number' ){
//                     yearlyAggregates[endYear].intensitySum += intensity;
//                 }
//                 if(typeof relevance === 'number' ){
//                     yearlyAggregates[endYear].relevanceSum += relevance;
//                 }
//                 if(typeof likelihood === 'number' ){
//                     yearlyAggregates[endYear].likelihoodSum += likelihood;
//                 }



                
                
                
//                 yearlyAggregates[endYear].count++;
//             // }
//         }
//     });

//     // Calculate averages for each year
//     const yearlyAverages = {};
//     for (const year in yearlyAggregates) {
//         if (yearlyAggregates.hasOwnProperty(year)) {
//             const values = yearlyAggregates[year];
//             yearlyAverages[year] = {
//                 averageIntensity: values.count ? values.intensitySum / values.count : 0,
//                 averageRelevance: values.count ? values.relevanceSum / values.count : 0,
//                 averageLikelihood: values.count ? values.likelihoodSum / values.count : 0,
//                 count: values.count
//             };
//         }
//     }

//     const mockLineData = [];

//     let I = [];
//     let R = [];
//     let L = [];
//     for (const year in yearlyAverages) {
//         const { averageIntensity, averageRelevance, averageLikelihood } = yearlyAverages[year];
//         if (year) {
//             I.push({ x: year, y: averageIntensity });
//             R.push({ x: year, y: averageRelevance });
//             L.push({ x: year, y: averageLikelihood });
//         }
//     }
//     mockLineData.push({ id: "Intensity", color: "green", data: I });
//     mockLineData.push({ id: "Relevance", color: "yellow", data: R });
//     mockLineData.push({ id: "Likelihood", color: "blue", data: L });

//     if(Constraint === 'end_year')
//     console.log(mockLineData);
//     return mockLineData;
// }

export function overall_line(data, Currsector, CurrYear, basedON, Constraint) {
    const aggregates = {};

    // Iterate over data to calculate aggregates
    data.forEach(item => {
        const constraintValue = item[Constraint];
        const basedOnValue = item[basedON];
        const intensity = item.intensity;
        const relevance = item.relevance;
        const likelihood = item.likelihood;

        // Ensure these are numbers and not undefined/null
        if (typeof intensity === 'number' && typeof relevance === 'number' && typeof likelihood === 'number') {
            if (Currsector === "Overall" || item.sector === Currsector) {
                let key;

                // Determine the key based on whether we are looking at "Overall" or a specific year
                if (CurrYear === "Overall") {
                    // key = constraintValue;
                    key = basedOnValue;
                } else if (constraintValue === CurrYear) {
                    key = basedOnValue;
                } else {
                    return; // Skip this item if it doesn't match the year constraint
                }

                if (!aggregates[key]) {
                    aggregates[key] = {
                        intensitySum: 0,
                        relevanceSum: 0,
                        likelihoodSum: 0,
                        count: 0
                    };
                }

                aggregates[key].intensitySum += intensity;
                aggregates[key].relevanceSum += relevance;
                aggregates[key].likelihoodSum += likelihood;
                aggregates[key].count++;
            }
        }
    });

    // Calculate averages
    const averages = {};
    for (const key in aggregates) {
        if (aggregates.hasOwnProperty(key)) {
            const values = aggregates[key];
            averages[key] = {
                averageIntensity: values.count ? values.intensitySum / values.count : 0,
                averageRelevance: values.count ? values.relevanceSum / values.count : 0,
                averageLikelihood: values.count ? values.likelihoodSum / values.count : 0,
                count: values.count
            };
        }
    }

    // Prepare data for the graph
    const mockLineData = [];

    let I = [];
    let R = [];
    let L = [];
    for (const key in averages) {
        const { averageIntensity, averageRelevance, averageLikelihood } = averages[key];
        if (key) {
            I.push({ x: key, y: averageIntensity });
            R.push({ x: key, y: averageRelevance });
            L.push({ x: key, y: averageLikelihood });
        }
    }
    mockLineData.push({ id: "Intensity", color: "green", data: I });
    mockLineData.push({ id: "Relevance", color: "yellow", data: R });
    mockLineData.push({ id: "Likelihood", color: "blue", data: L });

    console.log(mockLineData);
    return mockLineData;
}




// export function barcharts(data, country) {
//     const yearlyAggregates = {};

//     // Iterate over data to calculate aggregates
//     data.forEach(item => {
//         // Check if sector matches or if sector is "overall"
//         if (country === "Overall" || (item['country'] === country)) {
//             const country = item[country];
//             const intensity = item.intensity;
//             const relevance = item.relevance;
//             const likelihood = item.likelihood;

//             if (!yearlyAggregates[endYear]) {
//                 yearlyAggregates[endYear] = {
//                     intensitySum: 0,
//                     relevanceSum: 0,
//                     likelihoodSum: 0,
//                     count: 0
//                 };
//             }

//             yearlyAggregates[endYear].intensitySum += intensity;
//             yearlyAggregates[endYear].relevanceSum += relevance;
//             yearlyAggregates[endYear].likelihoodSum += likelihood;
//             yearlyAggregates[endYear].count++;
//         }
//     });

//     // Calculate averages for each year
//     const yearlyAverages = {};
//     for (const year in yearlyAggregates) {
//         if (yearlyAggregates.hasOwnProperty(year)) {
//             const values = yearlyAggregates[year];
//             yearlyAverages[year] = {
//                 averageIntensity: values.intensitySum / values.count,
//                 averageRelevance: values.relevanceSum / values.count,
//                 averageLikelihood: values.likelihoodSum / values.count,
//                 count: values.count
//             };
//         }
//     }
    
//     const mockLineData = [];

//     let I = [];
//     let R = [];
//     let L = [];
//     for (const year in yearlyAverages) {
//         const { averageIntensity, averageRelevance, averageLikelihood } = yearlyAverages[year];
//         // const dataI = { x: year, y: averageIntensity };
//         // const dataR = { x: year, y: averageRelevance };
//         // const dataL = { x: year, y: averageLikelihood };
//         I.push({x: year, y: averageIntensity});
//         R.push({x: year, y: averageRelevance});
//         L.push({x: year, y: averageLikelihood});
//     }
//     mockLineData.push({ id: "Intensity", color: "green", data: I });
//     mockLineData.push({ id: "Relevance", color: "yellow", data: R });
//     mockLineData.push({ id: "Likelihood", color: "blue", data: L });
//     // }

//     // console.log(mockLineData);
//     return mockLineData;
//     // mockLineData.forEach(item => {
// }

export function getUniqueValues(data, property) {
    const uniqueValues = new Set(); // Using a Set to store unique values

    // Iterate through each item in the data
    data.forEach(item => {
        // Check if the property exists and is not an empty string
        if (item[property] !== undefined && item[property] !== null && item[property].toString().trim() !== '') {
            // Add the property value to the Set
            uniqueValues.add(item[property]);
        }
    });

    // Convert the Set to an array and return it
    return Array.from(uniqueValues);
}

export function getAllCountryOfRegion(data, region) {
    const uniqueValues = new Set(); // Using a Set to store unique values

    // Iterate through each item in the data
    data.forEach(item => {
        // Check if the property exists and is not an empty string
        if (item["region"] === region && item["country"].toString().trim() !== '') {
            // Add the property value to the Set
            uniqueValues.add(item["country"]);
        }
    });

    // Convert the Set to an array and return it
    return Array.from(uniqueValues);
}

export function Search_From_What(Data, FilterList, FilterBy, ToFind) {
    const uniqueEndYears = [];
    const filteredData = Data.filter(obj => FilterList.includes(obj[FilterBy]));
    filteredData.forEach(obj => {
        if (!uniqueEndYears.includes(obj[ToFind])) {
            uniqueEndYears.push(obj[ToFind]);
        }
    });
    return uniqueEndYears;
}


export function countTopics(data, region, country, year) {
    let topicCounts = {};
    let uniqueColors = {};

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = 'hsl(';
        for (let i = 0; i < 3; i++) {
            let hex = '';
            for (let j = 0; j < 2; j++) {
                hex += letters[Math.floor(Math.random() * 16)];
            }
            color += parseInt(hex, 16);
            if (i < 2) color += ', ';
        }
        return color + '%)';
    }

    data.forEach(entry => {
        let entryRegion = entry.region;
        let entryCountry = entry.country;
        let entryYear = entry.start_year;

        // Check if the entry matches the provided region, country, and year
        if ((region === "World" || entryRegion === region) &&
            (country === "Overall" || entryCountry === country) &&
            (year === "Overall" || entryYear === year)) {
            let topic = entry.topic;
            
            if (topic === "") {
                topic = "NULL";
            }
            // Increment the count for the topic or initialize it to 1 if it doesn't exist
            topicCounts[topic] = (topicCounts[topic] || 0) + 1;
            
            if (!uniqueColors[topic]) {
                uniqueColors[topic] = getRandomColor();
            }
        }
    });

    let mockPieData = [];
    for (let topic in topicCounts) {
        mockPieData.push({
            id: topic.toLowerCase(),
            label: topic,
            value: topicCounts[topic],
            color: uniqueColors[topic]
        });
    }

    return mockPieData;
}



export function BarDataConverter(data, sectors, years){

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const result = [];

    years.forEach(year => {
        const sectorCounts = { year };
        sectors.forEach(sector => {
            sectorCounts[sector] = 0;
        });
        result.push(sectorCounts);
    });

    data.forEach(item => {
        const { start_year, sector } = item;
        if (years.includes(start_year) && sectors.includes(sector)) {
            const sectorCount = result.find(obj => obj.year === start_year);
            if (sectorCount) {
                sectorCount[sector]++;
            }
        }
    });

    result.forEach(sectorCounts => {
        sectors.forEach(sector => {
            sectorCounts[`${sector}Color`] = getRandomColor();
        });
    });

    return result;

}



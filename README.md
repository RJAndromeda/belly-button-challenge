# belly-button-challenge

Module 14 Challenge.

This is deployed to github pages at : https://rjandromeda.github.io/belly-button-challenge/

### Repository Table of Contents

This repository consists of:

- A folder named Starter_Code, which includes: 

  - app.js - the file with the code for the app
  - index.html - the index file
  - samples.json - the sample json of the data

- README.md: this readme file

  - .gitkeep

  - .gitignore

### Tasks

To create an interactive dashboard to display the OTUs of individuals from a dataset. Visually represent data in a bar chart, a bubble chart, and also give metadata information for the chosen subject, and deploy to git hub pages.

This task involved using the samples information from a Json file, and bringing the data in to create the correct data visualisations. A horizontal bar chart was used to display the top 10 OTUs, using data sorting and slicing, and creating a function to create the chart from the selected data.

The bubble chart needed to display the entire range of the bacteria found within the test example, with the size of the bubbles indicating how many bacteria of the particular sort were found in the sample taken from the individual. This involved setting the markers to the sample_values to visually indicate the volume found of the particular bacteria.

The demographic information was filled from the sample metadata by individual. 

The interactive nature of the dashboard was established by filtering the data, then using d3 for:  entries(object), forEach, and appending the text - eg from code: Object.entries(valueData).forEach(([key,value]) =>  d3.select("#sample-metadata").append("h5").text(`${key}: ${value}`)

I thank Mireille for hints shared through our classmate chat, and cheery words of encouragement - and for also sharing my pain with parentheses placement.

I also called on resources beyond the course material for additional information and to get my head around how the individual functions were working, including:

https://www.geeksforgeeks.org/d3-js-d3-entries-function/

https://www.w3schools.com/jsref/jsref_foreach.asp

https://d3js.org/d3-selection/selecting

https://plotly.com/javascript/bubble-charts/


// Firstly, set the constant for the URL
const bugs = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the whole JSON data and console log it:
d3.json(bugs).then(function(data) {
  console.log(data);
});
// Initialise the dropdown selection FIRST:
let dropdownMenu = d3.select("#selDataset");

// Populate the dropdown
d3.json(bugs).then((data) => {
  let names = data.names;
  names.forEach(id => {
    dropdownMenu.append("option").text(id).property("value", id);
  });
  let chosen = names[0]
 


// initialise the dashboard:
function init() {
// need to set up the initial dashboard so that something works from the start
meta(chosen);
barchart(chosen);
bubblechart(chosen);

};

// The function to get the data for the dropdown and the graphs:
function meta(chosen) {
  d3.json(bugs).then((data) => {
    let meta = data.meta;

    let value = meta.filter(result => result.id == chosen);

    console.log(value)
  })}});

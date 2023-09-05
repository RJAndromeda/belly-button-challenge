// Firstly, set the constant for the URL
const bugs = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the whole JSON data and console log it:
d3.json(bugs).then(function(data) {
  console.log(data);
});
// Initialise the dropdown selection:
let dropdownMenu = d3.select("#selDataset");

// Populate the dropdown with the ids as the values, and start with the first:
d3.json(bugs).then((data) => {
  let names = data.names;
  names.forEach(id => {
    dropdownMenu.append("option").text(id).property("value", id);
  });
  let chosen = names[0]
 
// initialise the dashboard so that something's present from the get-go:
function init() {
meta(chosen);
barchart(chosen);
bubblechart(chosen);

};

// The function to get the data filtered by id 'chosen':
function meta(chosen) {
  d3.json(bugs).then((data) => {
    let meta = data.metadata;
    let value = meta.filter(result => result.id == chosen);

    console.log(value)
  })}});

  // The function to get the data for the demographic info:
function demographic(chosen) {
  d3.json(bugs).then((data) => {
    let meta = data.metadata;
    let resultarray = meta.filter(chosenObject => chosenObject.id == chosen);
    let result = resultarray[0];
    let demoInfo = d3.select("#sample-metadata");

    // clear out the data between choices:
    demoInfo.html("");

    // Add in the entries for each one in text within the demographics table:
    Object.entries(result).forEach(([key, value]) => {
      demoInfo.append("h6").text(`${key}: ${value}`);
    });
  });
}
// Barchart :
function barchart(chosen) {
let x_axis = chosen.sample_values.slice(0,10).reverse();
let y_axis = chosen.otu_ids.slice(0,10).reverse().map((item) =>`OTU ${item}`);
let text = chosen.otu_labels.slice(0,10).reverse();

// The function  horizontal barchart:
let chart  = [{
  type: 'bar',
  x: x_axis,
  y: y_axis,
  text: text,
  orientation: 'h'
}];
let layout = {
  margin:{
    l:75,
    r:75,
    t:10,
    b:75},
    height: 500,
    width: 600};


Plotly.newPlot('bar', chart, layout);}

// Call updatePlotly() when a change takes place to the DOM (NEED TO AMEND THIS TO MAKE SURE IT FITS IN WITH THE HTML  & my code option - 
// just pulledfrom the eg for modifying the charts, but want to regenerate new ones instead, since it's easier than trying to manipulate 
// the graph for each entire one):::::

function optionChanged(value) {
  d3.selectAll("#selDataset").on("optionChanged", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  let dataset = dropdownMenu.property("value");};}

  // bubble chart should be relatively easy, since it's all the data being displayed:
  function bubble(chosen) {
    d3.json(bugs).then((data) => {
      let variable = data.samples;
      let value = variable.filter(result => result.id == firstone);
      let valueData = value[0];
      let otu_ids = valueData.otu_ids;
      let otu_labels = valueData.otu_labels;
      let sample_values = valueData.sample_values;

      console.log(otu_ids, otu_labels, sample_values)

     }
  };

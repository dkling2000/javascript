// from data.js
let ufosTable = data;

// Selecting table body
let tbody = d3.select('tbody');

// Populate the table
ufosTable.forEach((ufoReport) => {
  let row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
    let cell = row.append("td");
    cell.text(value);
  });
});

 // Variable assignment for 
 let enterButton  = d3.select("#filter-btn");
 
 // function for displaying filtered date
 function displayedData(dateFilter) {
   dateFilter.forEach(function(dateFilter) {
    let row = tbody.append('tr'); 
     Object.entries(dateFilter).forEach(function([key,value]) { 
       let cell = row.append('td');
       cell.text(value);
     })})};

// Function for capturing date and click action
function buttonClick () {
    d3.event.preventDefault();
    let inputDate = d3.select('#datetime');
    let inputValue = inputDate.property('value');
    let dateFilter = ufosTable.filter(ufoData => ufoData.datetime === inputValue);
// clear original table out to display filtered data
    d3.select("tbody").selectAll("tr").remove();
    displayedData(dateFilter);
}
enterButton.on('click', buttonClick);

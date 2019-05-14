// from data.js
let ufosTable = data;


// console.log(ufosTable);

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

 // Filter the table by Date
 let submit = d3.select("#filter-btn");
 let inputElement = d3.select('#dateime');
 let inputValue = inputElement.property('value')

 console.log(inputValue)

// function filterByDate(ufosTable) {
//   let filteredData = ufosTable.filter(inputValue === ufosTable.datetime)  
//   console.log (inputElement);
//   console.log (inputValue);
//   console.log (filteredData);
// }

// updateTable (ufosTable);
// submit.on("click", function() {
//   let result = filterByDate (data);
//   updateTable (result);
// });
  
  
// Prevent the page from refreshing
  // d3.event.preventDefault();
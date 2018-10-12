function getFahrenheit(result){
  // Your code goes here
}

function getHour(UnixTime){
  const date = new Date(UnixTime*1000);
  return date.getHours();
}

function generateDataSet(labels, data) {
  return {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: "NYC Weather Data",
          data: data,
          backgroundColor: "rgba(100,150,220,0.2)",
          borderColor: 'rgb(255, 99, 132)'
        }
      ]
    },
    options: {
      // additional configurations here
    }
  }
}

function makeRequest(endpoint, canvas) {
  fetch(endpoint)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    let obj = {};
    myJson.hourly.data.forEach((hourlyData1)=>{
     obj[getHour(hourlyData1.time)] = hourlyData1.temperature;
   })
   return obj;
  })
  .then(function(objInfo){
    return new Chart(canvas, generateDataSet(Object.keys(objInfo), Object.values(objInfo)));
  })

  // After your fetch works - use your json data with the line below :)


//   var chart = new Chart(canvas, {
//     // The type of chart we want to create
//     type: 'line',
//
//     // The data for our dataset
//     data: {
//         labels: Object.keys(getData()),
//         datasets: [{
//             label: "My First dataset",
//             data: Object.values(getData()),
//         }]
//     },
//
//     // Configuration options go here
//     options: {}
// });
// }
}

// const getData = ()=>{
//   dataObj.hourly.data.forEach((hourlyData1)=>{
//    obj[getHour(hourlyData1.time)] = hourlyData1.temperature;
//  });
//  return obj;
// };
// getData();

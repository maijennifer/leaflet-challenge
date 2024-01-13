// Create the map with our layers.
let layers = {
  layer1: new L.LayerGroup(),
  layer2: new L.LayerGroup(),
  layer3: new L.LayerGroup(),
  layer4: new L.LayerGroup(),
  layer5: new L.LayerGroup(),
  layer6: new L.LayerGroup()
}; 

let mymap = L.map("map", {
    center: [38, -100],
    zoom: 4,
    layers: [
      layers.layer1,
      layers.layer2,
      layers.layer3,
      layers.layer4,
      layers.layer5,
      layers.layer6
    ]
  });
  
  
  // Add our "streetmap" tile layer to the map.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
  
  // Create an overlays object to add to the layer control.
  let overlays = {
    "-10 - 10": layers.layer1,
    "10 - 30": layers.layer2,
    "30 - 50": layers.layer3,
    "50 - 70": layers.layer4,
    "70 - 90": layers.layer5,
    "90+": layers.layer6
  };
  
  // Create a control for our layers, and add our overlays to it.
  L.control.layers(null, overlays).addTo(mymap);
  
  // Create a legend to display information about our map.
  let info = L.control({
    position: "bottomright"
  });
  
  // When the layer control is added, insert a div with the class of "legend".
  info.onAdd = function() {
    let div = L.DomUtil.create("div", "legend");
    return div;
  };
  // Add the info legend to the map.
  info.addTo(mymap);
  
  // Initialize an object that contains icons for each layer group.
  // let icons = {
  //   layer1: L.ExtraMarkers({
  //     icon: "ion-settings",
  //     iconColor: "white",
  //     markerColor: "yellow",
  //     shape: "circle"
  //   }),
  //   layer2: L.ExtraMarkers({
  //     icon: "ion-android-bicycle",
  //     iconColor: "white",
  //     markerColor: "red",
  //     shape: "circle"
  //   }),
  //   layer3: L.ExtraMarkers({
  //     icon: "ion-minus-circled",
  //     iconColor: "white",
  //     markerColor: "blue-dark",
  //     shape: "circle"
  //   }),
  //   layer4: L.ExtraMarkers({
  //     icon: "ion-android-bicycle",
  //     iconColor: "white",
  //     markerColor: "orange",
  //     shape: "circle"
  //   }),
  //   layer5 : L.ExtraMarkers({
  //     icon: "ion-android-bicycle",
  //     iconColor: "white",
  //     markerColor: "green",
  //     shape: "circle"
  //   }),
  //   layer6 : L.ExtraMarkers({ 
  //       icon: "ion-android-bicycle",
  //       iconColor: "white",
  //       markerColor: "green",
  //       shape: "circle"
  //     })
  // };
  
// // When the first API call completes, perform another call to the Citi Bike station status endpoint.
d3.json(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson`).then(function(quakedata){
  console.log(quakedata.features);
});
//   let quakefeature = quakedata.features;
  
// //   let times = quakedata.features.properties.time;
// //   let coord = quakedata.features.geometry.coordinates;
// //   let quakeID = quakedata.features.properties.ids;
// // };
// //   //Create an object to keep the number of markers in each layer.
//   let stationCount = {
//     layer1: 0,
//     layer2: 0,
//     layer3: 0,
//     layer4: 0,
//     layer5: 0,
//     layer6: 0
//   };
  

//   let stationStatusCode;
  
//   for (let i = 0; quakefeature[i]; i++) {

//     let mag =  quakefeature[i].properties.mag;
//     if (mag < 10) {
//       stationStatusCode = "layer1";
//     }
//     else if (mag < 30) {
//       stationStatusCode = "layer2";
//     }
//     else if (mag < 50) {
//       stationStatusCode = "layer3";
//     }
//     else if (mag < 70) {
//       stationStatusCode = "layer4";
//     }
//     else if (mag < 90) {
//       stationStatusCode = "layer5";
//     }
//     else {
//       stationStatusCode = "layer6";
//     }
  
//     stationCount[stationStatusCode]++;

//     let newMarker = L.marker([station.lat, station.lon], {
//       icon: icons[stationStatusCode]
//     });
  

//     newMarker.addTo(layers[stationStatusCode]);
//   }; 
// });
//     // Bind a popup to the marker that will  display on being clicked. This will be rendered as HTML.
//     newMarker.bindPopup(station.name + "<br> Capacity: " + station.capacity + "<br>" + station.num_bikes_available + " Bikes Available");
//   }
  
//     // Call the updateLegend function, which will update the legend!
//     updateLegend(updatedAt, stationCount);
//   });
// });
  
// //   // Update the legend's innerHTML with the last updated time and station count.
// //   function updateLegend(time, stationCount) {
// //     document.querySelector(".legend").innerHTML = [
// //       "<p>Updated: " + moment.unix(time).format("h:mm:ss A") + "</p>",
// //       "<p class='out-of-order'>Out of Order Stations: " + stationCount.OUT_OF_ORDER + "</p>",
// //       "<p class='coming-soon'>Stations Coming Soon: " + stationCount.COMING_SOON + "</p>",
// //       "<p class='empty'>Empty Stations: " + stationCount.EMPTY + "</p>",
// //       "<p class='low'>Low Stations: " + stationCount.LOW + "</p>",
// //       "<p class='healthy'>Healthy Stations: " + stationCount.NORMAL + "</p>"
// //     ].join("");
// //   }

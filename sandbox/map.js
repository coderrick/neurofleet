/* global mapboxgl */
/* global MapboxDirections */
/* global turf */


mapboxgl.accessToken = 'pk.eyJ1Ijoiam9lYWhhbmQiLCJhIjoiaDd1MEJZQSJ9.fl3WTCt8MGNOSCGR_qqz7A' 
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/light-v9', // stylesheet location
    center: [-122.6782433, 45.5252814], // starting position [lng, lat]
    zoom: 12 // starting zoom
})

var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
})

map.addControl(directions, 'top-left')

directions.on('route', function () {
  console.log('route')

  // easier way to get this?
  var routeData = map.getSource('directions')._data
  console.log(routeData)
  
  var location = routeData.features.filter((feature) => {
    return feature.properties.id === 'origin'
  })[0]
  var dest = routeData.features.filter((feature) => {
    return feature.properties.id === 'destination'
  })[0]
  var route = routeData.features.filter((feature) => {
    return feature.properties.route === 'selected'
  })[0]
  
  // EXERCISE Tips
  // 
  // 1. Add point to animate to map, starting at origin
  // 2. Create an index so you know when you are "done"
  // 3. Use map.getSource('location').setData() to set new location inside animate()
  // 4. Call animate to get it started!
  // 
  // See another example here: https://www.mapbox.com/mapbox-gl-js/example/animate-point-along-route/
  
  function animate() {
    // Move your point to new location inside here
    
    // If point is at destination, do not call requestAnimationFrame(animate)
    requestAnimationFrame(animate)
  }
})

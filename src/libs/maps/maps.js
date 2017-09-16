(() => {

  const WIDTH = 560
  const HEIGHT = 380

  const svg = d3.select('#map').append('svg')
    .attr('width', WIDTH)
    .attr('height', HEIGHT)
    .attr('fill', '#1C4278')

  const projection = d3.geo.mercator()
    .scale(4500) // scales your map
    .translate([-1700, 3900]); // centers in SVG

  const path = d3.geo.path()
    .projection(projection);


  function changeTitle(that, name = '', className = '', color = 'white') {
    let nameElement = document.getElementById('map-name')

    nameElement.textContent = name
    nameElement.className = className

    d3.select(that).attr('fill', color)
  }

  function setNameStyling() {
    let event = window.event
    let elStyle = document.getElementById('map-name').style
    elStyle.top = `${event.clientY - 50}px`
    elStyle.left = `${event.clientX}px`
  }

  d3.json('/libs/maps/bg.json', (json) => { // loads JSON file
    svg.selectAll("path") // selects path elements, will make them if they don't exist
      .data(json.features) // iterates over geo feature
      .enter() // adds feature if it doesn't exist as an element
      .append("path") // defines element as a path
      .attr("d", path) // path generator translates geo data to SVG
      .on('mouseover', function({ properties }) {
        changeTitle(this, properties.name, 'active', '#d1c9b8')
      })
      .on('mouseout', function() {
        changeTitle(this, '', '', '#1C4278')
      })
      .on('mousemove', function() {
        setNameStyling()
      })
  });

})()

(() => {

  const WIDTH = 800
  const HEIGHT = 800

  const svg = d3.select('#map').append('svg')
    .attr('width', WIDTH)
    .attr('height', HEIGHT)

  const projection = d3.geo.mercator()
    .scale(4500) // scales your map
    .translate([-1700, 4000]); // centers in SVG

  const path = d3.geo.path()
    .projection(projection);


  d3.json('/libs/maps/bg.json', (json) => { // loads JSON file
    svg.selectAll("path") // selects path elements, will make them if they don't exist
      .data(json.features) // iterates over geo feature
      .enter() // adds feature if it doesn't exist as an element
      .append("path") // defines element as a path
      .attr("d", path) // path generator translates geo data to SVG
      .on('click', function(){
        d3.select(this).attr('fill', '#d1c9b8')
      });
  });

})()

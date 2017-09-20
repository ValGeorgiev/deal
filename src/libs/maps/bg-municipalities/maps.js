function initVidinMap(city) {
  const _city = window.__BG_MUNICIPALITIES__[city]
  const WIDTH = _city.width
  const HEIGHT = _city.height

  const svg = d3.select('#vidin').append('svg')
    .attr('width', WIDTH)
    .attr('height', HEIGHT)

  const projection = d3.geo.mercator()
    .scale(_city.scale) // scales your map
    .translate(_city.translate) // centers in SVG

  const path = d3.geo.path()
    .projection(projection)


  function changeTitle(that, name = '', className = '', active = '') {
    let nameElement = document.getElementById('vidin-map-name')

    nameElement.textContent = name
    nameElement.className = className

    d3.select(that).attr('class', active)
  }

  function setNameStyling() {
    let event = window.event
    let elStyle = document.getElementById('vidin-map-name').style
    elStyle.top = `${event.clientY + 400}px`
    elStyle.left = `${event.clientX}px`
  }

  function chooseRegion(that, { name }) {
    let event = new Event('input', { bubbles: true })
    let elem = document.getElementById('map-region')

    if (elem.value === name) {
      elem.value = ''
      d3.select(that).attr('id', '')
    } else {
      let selected = document.getElementById('selected')

      if (selected !== null) {
        selected.id = ''
      }

      elem.value = name
      d3.select(that).attr('id', 'selected')
    }

    event.simulated = true
    elem.dispatchEvent(event)
  }

  let url = `/libs/maps/bg-municipalities/${city}.json`
  d3.json(url, (json) => { // loads JSON file
    svg.selectAll("path") // selects path elements, will make them if they don't exist
      .data(json.features) // iterates over geo feature
      .enter() // adds feature if it doesn't exist as an element
      .append("path") // defines element as a path
      .attr("d", path) // path generator translates geo data to SVG
      .on('mouseover', function({ properties }) {
        changeTitle(this, properties.name, 'active', 'active')
      })
      .on('mouseout', function() {
        changeTitle(this)
      })
      .on('mousemove', function() {
        setNameStyling()
      })
      .on('click', function({ properties }) {
        chooseRegion(this, properties)
      })
  })
}




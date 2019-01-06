/* global d3 queue ready */

// Slider
queue()
  .defer(d3.json, 'static/footprint.json')
  .await(slide)

function slide (error, json) {
  if (error) throw error

  let firstYear = parseInt(d3.min(Object.keys(json)))
  let lastYear = parseInt(d3.max(Object.keys(json)))
  let nbOfYears = lastYear - firstYear
  let dataTime = d3.range(0, nbOfYears + 1).map(function (d) {
    return new Date(firstYear + d, 10, 3)
  })

  let sliderTime = d3
    .sliderBottom()
    .min(d3.min(dataTime))
    .max(d3.max(dataTime))
    .step(1000 * 60 * 60 * 24 * 365)
    .width(800)
    .tickFormat(d3.timeFormat('%Y'))
    .tickValues(dataTime)
    .default(new Date(1996, 10, 3))
    .on('onchange', val => {
      let year = val.getFullYear()
      updateWorld(error, year)
      // d3.select('p#value-time').text(d3.timeFormat('%Y')(val))
      // queue()
      // .defer(d3.tsv, 'static/footprintByYear/' + year + '.tsv')
      // .await(updateWorld(year))
    })

  let gTime = d3
    .select('div#slider-time')
    .append('svg')
    .attr('width', 1000)
    .attr('height', 100)
    .append('g')
    .attr('transform', 'translate(25,10)')

  gTime.call(sliderTime)

  d3.select('p#value-time').text(d3.timeFormat('%Y')(sliderTime.value()))
}

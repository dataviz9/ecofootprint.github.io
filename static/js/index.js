

let CLOCK = {
    width: 500,
    height: 500,
    innerRadius: 30,
    margin: 50,
    yearStart: 1960,
    yearEnd: 2015,
    years: Array.from({ length: 2016 - 1960 },
        (x, i) => i + 1960)
}

let clock = init_clock(CLOCK)



d3.queue()
    .defer(d3.json, 'static/footprint.json')
    .defer(d3.json, 'static/world_countries.json')
    // .defer(d3.csv, 'static/footprintByYear/2014.csv')
    .await(function (error, footprints, countries) {
        let linechart = initLineChart()
        let worldmap = initWorldmap(countries)

        function selectCountry(d) {
            highlight_country(worldmap.highlighted, false)
            update(clock, "static/splitted_data/" + d.id + ".csv")
            worldmap.highlighted = d.id
            highlight_country(d.id, true)
            d3.select("#country-select").property("value", d.id)
            toggleChartBtn(linechart, d.id)
        }

        worldmap.paths.on("click", selectCountry)
            .on('mouseover', function (d) {
                worldmap.tip.show(d)
                highlight_country(d.id, true)
                if (linechart.graphics[d.id] !== undefined)
                    hoverCountryTrace(linechart, d.id)
            })
            .on("mouseout", function (d) {
                worldmap.tip.hide(d)
                highlight_country(d.id, d.id === worldmap.highlighted)
                resetLines(linechart, d.id)
            })
        worldmap.canvas.on("dblclick", d => {
            highlight_country(worldmap.highlighted, false)
            worldmap.highlighted = undefined
            update(clock, "static/splitted_data/WORLD.csv")
            d3.select("#country-select").property("value", "WORLD")
            hoverCountryTrace(linechart, "WORLD")
            toggleChartBtn(linechart, "WORLD")
        })


        // Listen toggle mode between "footprint" and "deficit"
        $("input[name='toggle-mode']").change(ev => {
            let mode = ev.target.value
            setSource(worldmap, mode)
            d3.select("#linechart-select").property("value", mode)
            setLineSource(linechart, mode)
        })
        setSource(worldmap, "footprint", false)

        let slider = initSlider(footprints, function (val) {
            let year = moment(val).year()
            setDate(linechart, year, 0)
            setYear(worldmap, year)
            let datum = clock.overshoots.select(d =>
                d.year === year ? this : null).datum()
            update_current(clock)(datum)

        })
        slider.on("end", function () {
            d3.selectAll(".arc")
                .transition()
                .delay(80)
                .duration(500)
                .style("opacity", function (d) {
                    if (d === clock.current) {
                        return ''
                    } else {
                        return d3.select(this).classed("overshoot") ? 1 : 0.7
                    }
                })
        })

        clock.overshoots.on('click', d => {
            slider.value(moment(d.year, "YYYY"))
        })

        d3.select("#chart-btn").on("click", function () {
            let country = d3.select("#country-select").node().value
            if (linechart.graphics[country] === undefined) {
                addLine(linechart, country)
                linechart.graphics[country].legend.on("click", selectCountry)
                hoverCountryTrace(linechart, country)
                // selectCountry(linechart, country)
            } else {
                removeLine(linechart, country)
                resetLines()
            }
            toggleChartBtn(linechart, country)
        })

        d3.select("#linechart-select").on("change", function (d) {
            setLineSource(linechart, this.value)
        })

        d3.select("#clear-btn").on("click", function () {
            Object.keys(linechart.graphics)
                .forEach(function (k, i) {
                    if (k !== "WORLD") removeLine(linechart, k)
                })
        })


        addLine(linechart, "WORLD")

        d3.csv("static/countries.csv", function (error, data) {
            var dropdown = d3.select("#country-select")
            dropdown.append("option")
                .attr("value", "WORLD")
                .text("World");
            data.sort((a, b) => a.country.localeCompare(b.country))
            data.forEach(function (v, i, _) {
                // fetch("static/splitted_data/" + v.code + ".csv",
                //     { method: 'HEAD', })
                //     .then(function (resp) {
                if (v.code !== "WORLD")
                    dropdown.append("option")
                        .attr("value", v.code)
                        .text(v.country);
                // })
            })


            // console.log(dropdown.property("value"))
            update(clock, "static/splitted_data/WORLD.csv")
            dropdown.on("change", function () {
                let country = this.value
                update(clock, "static/splitted_data/" + country + ".csv")
                highlight_country(worldmap.highlighted, false)
                worldmap.paths.filter(d => d.id === country)
                    .call(d => {
                        worldmap.highlighted = d.id
                        highlight_country(worldmap.highlighted, true)
                    })
                toggleChartBtn(linechart, country)

            })

            d3.select("#country-select").property("value", "WORLD")
        })
    })



function toggleChartBtn(linechart, country) {
    d3.select("#chart-btn")
        .classed("btn-success", linechart.graphics[country] === undefined)
        .classed("btn-warning", linechart.graphics[country] !== undefined)
        .attr("data-original-title", linechart.graphics[country] === undefined ?
            "Add country to linechart" : 
            "Remove country from linechart"
        )
        .select(".symbol")
        .classed("fa-plus", linechart.graphics[country] === undefined)
        .classed("fa-minus", linechart.graphics[country] !== undefined)
        
}

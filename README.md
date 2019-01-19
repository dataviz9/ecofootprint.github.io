# Ecological impact

The global subject of this project was the visualization of "Climate Data".  
We as a group decided to concentrate our efforts on the ecological footprint, the deficit / reserve ratio and the overshoot day.  
Here we describe the dataset,the terms and how we decided to visualize the data.

You can find the website [here](https://dataviz9.github.io/ecofootprint.github.io/).

Ce projet a été fait dans le cadre de l'UE [Dataviz](https://lyondataviz.github.io/teaching/lyon1-m2/2018/) proposé par l'Université Lyon 1. Le sujet était de créer une data visualization de données climatiques. Nous avons choisi de représenter trois composantes de l'impact écologique : l'empreinte écologique par personne par pays, le taux de déficit / réserve écologique ainsi que le jour de dépassement.

# Ecological footprint

The ecological footprint is defined as the biologically productive area needed to provide for everything people use: fruits and vegetables, fish, wood, fibers, absorption of carbon dioxide from fossil fuel use, and space for buildings and roads. At a global scale, footprint shows how big humanity's demand is compared to what planet Earth can renew. [Global Footprint Network](https://en.wikipedia.org/wiki/Global_Footprint_Network) has calculated the ecological footprint from UN data sources for the world as a whole and for over 200 nations.  

The measurement unit of the ecological footprint is the [global hectare](https://en.wikipedia.org/wiki/Global_hectare). 

For more information, please visit the [footprint network](https://www.footprintnetwork.org/resources/glossary/) 

# Earth overshoot day 

Earth Overshoot Day is the calculated illustrative calendar date on which humanity’s resource consumption for the year exceeds Earth’s capacity to regenerate those resources that year. It is calculated by dividing the world biocapacity (the amount of natural resources generated by Earth that year), by the world ecological footprint and multiplying by 365 (number of days in one year).

# Dataset

Our dataset is avaible at the [Global Footprint Network](https://www.footprintnetwork.org/licenses/public-data-package-free-2018/) website.  
Based on this dataset we managed to calculate an overshoot day for each country per year. 

![img](https://github.com/dataviz9/ecofootprint.github.io/blob/master/static/img/overshoot_day_formula.png)


We also calculated the deficit as a country's biocapacity per person (in global hectares) minus its ecological footprint per person (also in global hectares).

![img1](https://github.com/dataviz9/ecofootprint.github.io/blob/master/static/img/deficit_formula.png)

If this deficit is greater than 0 (surplus), we divided by the ecological footprint to show the magnitude of the surplus compared with the footrpint.

![img2](https://github.com/dataviz9/ecofootprint.github.io/blob/master/static/img/surplus_ratio_formula.png)

If the deficit is lower than 0, we divided by the biocapacity per person to show magnitude of the defecit compared with the biocapacity.

![img3](https://github.com/dataviz9/ecofootprint.github.io/blob/master/static/img/deficit_ratio_formula.png)


We created a `csv` file for each country. The files are named after the unique 3 letter code of each country. This makes it easier to connect our main visualizations. Each file contains all the information needed (footprint, deficit, year,ratio)

Concerning the ecological footprint, we created a file for each year of avaible data. One file contains all the information about the footprint, the country, the three letter code and the deficit which is calculated by the difference of the biocapacity per person and the footprint per person of a country. 

The footprint files are avaible [here](https://github.com/dataviz9/ecofootprint.github.io/tree/master/static/footprintDeficitByYear)

We created a `csv` [file](https://github.com/dataviz9/ecofootprint.github.io/blob/master/static/countries.csv) that contains the country name and its three letter code.

Other files in `json` format were needed to create a geographical map.

# Vizualisations

Our main visualizations:

* Geographical map:
  
  There are two different modes for this visualization.  
  The first one shows the ecological footprint per person for each country.  
  The second shows the ratio deficit/reserve per person for each country.  
  We can interact with both modes by hovering the mouse on a country. The name and the ecological footprint per person of the country will be displayed. You can also click on a country to interact with the other visualizations (overshoot day clock and the linechart).  
  The year for which the data are displayed can be controlled with the slider. The slider is connected to the overshoot day clock

* Overshoot day clock

  This visualization shows the overshoot day per year for each country. One full circle is equal to 365 days. If the overshoot day is greater than 365 days then the color displayed will be blue. If is less than 365 days, two different colors will be displayed. The yellow shows the days when the humanity’s resource consumption exceeds Earth’s capacity to regenerate those resources that year.  
  The overshoot day will be displayed in the center of the clock. You can select a year by clicking. The map will be updated for the selected year or the selected country.
  An alternative version of the clock is available [here](https://dataviz9.github.io/ecofootprint.github.io/clock-alt/index.html)
  
* Linechart

  The linechart goal is to be able to compare the overshoot day, the ecological footprint or the deficit / reserve ratio for two or more countries. You can select the countries to display in the linechart by clicking in the map or by adding them via the dropdown list in the head of the page.
  
  

# Scripts

Our scripts can be found in the `js` [folder](https://github.com/dataviz9/ecofootprint.github.io/tree/master/static/js)

* Overshoot day clock [clock](https://github.com/dataviz9/ecofootprint.github.io/tree/master/static/js/clock.js)
* Overshoot day clock Glow [effect](https://github.com/dataviz9/ecofootprint.github.io/blob/master/static/js/glow.js)
* Map [script](https://github.com/dataviz9/ecofootprint.github.io/blob/master/static/js/worldmap.js)
* Slider [script](https://github.com/dataviz9/ecofootprint.github.io/blob/master/static/js/slider.js)
* Linechart [script](https://github.com/dataviz9/ecofootprint.github.io/blob/master/static/js/linechart.js)
* Index [script](https://github.com/dataviz9/ecofootprint.github.io/blob/master/static/js/index.js) used to connect all elements and charge the data.

# External libraries 

- [D3 simple slider](https://github.com/johnwalley/d3-simple-slider)
- [Moment.js](https://momentjs.com)
- [D3 Tip](https://github.com/Caged/d3-tip)
- [Map Legend](https://d3-legend.susielu.com)
- [Bootstrap](https://getbootstrap.com/)

# Coding technique references 

- Glow effect : https://www.visualcinnamon.com/2016/06/glow-filter-d3-visualization
- Arc transitions : https://bl.ocks.org/mbostock/1346410

No other external code was reused.

# Authors

- **_Eric CUMUNEL_**
- **_Louis DUCHEMIN_**
- **_Hermes PARAQINDES_**

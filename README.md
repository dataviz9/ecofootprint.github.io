# DataViz 2019

The global subject of this project was the visualization of "Climate Data".  
We as a group decided to concetrate our efforts on the ecological footprint and the overshoot day.  
Here we describe the dataset,the terms and how we decided to visualize the data.

The website build can be visited [here](https://dataviz9.github.io/).

# Ecological footprint

The ecological footprint is defined as the biologically productive area needed to provide for everything people use: fruits and vegetables, fish, wood, fibers, absorption of carbon dioxide from fossil fuel use, and space for buildings and roads. At a global scale, footprint shows how big humanity's demand is compared to what planet Earth can renew. [Global Footprint Network](https://en.wikipedia.org/wiki/Global_Footprint_Network) has calculated the ecological footprint from UN data sources for the world as a whole and for over 200 nations.  

The measurement unit of the ecological footprint is the [global hectare](https://en.wikipedia.org/wiki/Global_hectare). 

For more information, please visit the [footprint network](https://www.footprintnetwork.org/resources/glossary/) 

# Earth overshoot day 

Earth Overshoot Day is the calculated illustrative calendar date on which humanity’s resource consumption for the year exceeds Earth’s capacity to regenerate those resources that year. It is calculated by dividing the world biocapacity (the amount of natural resources generated by Earth that year), by the world ecological footprint and multiplying by 365 (number of days in one year).

# Dataset

Our dataset is avaible at the [Global Footprint Network](https://www.footprintnetwork.org/licenses/public-data-package-free-2018/) website.  
Based on this dataset we managed to calculate an overshoot day for each country per year. 
![img](http://bit.ly/2VTvDxg)

We created a `csv` file for each country. The files are named after the unique 3 letter code of each country. This makes it easier to reliate our main visualizations. 
The data are avaible [here](https://github.com/dataviz9/dataviz9.github.io/tree/master/static/footprintByYear)

Concerning the ecological footprint, we created a file for each year of avaible data. One file contains all the information about the footrpint, the country, the three letter code and the deficit which is calculated by the difference of the biocapacity per person and the footprint per person of a country. 

The footprint files are avaible [here](https://github.com/dataviz9/dataviz9.github.io/tree/master/static/footprintDeficitByYear)

We created a `csv` [file](https://github.com/dataviz9/dataviz9.github.io/blob/master/static/countries.csv) that contains the country name and its three letter code.

Other files in `json` format were needed to create a geographical map.

# Vizualisations

Our main visualizations:

* Geographical map:

  This visualization plots the ecological footprint per person to each country. 
  
  

# Scripts

Our scripts can be found in the `js` [folder](https://github.com/dataviz9/dataviz9.github.io/tree/master/static/js)

# External libraries 

- [D3 simple slider](https://github.com/johnwalley/d3-simple-slider)
- [Moment.js](https://momentjs.com)
- [D3 Tip](https://github.com/Caged/d3-tip)

# Coding technique references 

- Glow effect : https://www.visualcinnamon.com/2016/06/glow-filter-d3-visualization
- Arc transitions : https://bl.ocks.org/mbostock/1346410

No other external code was reused.

# Authors

- **_Eric CUMUNEL_**
- **_Louis DUCHEMIN_**
- **_Hermes PARAQINDES_**

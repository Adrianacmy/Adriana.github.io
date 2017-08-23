---
layout: post
category: data
tags: [data, python,folium, test]
comments: true
---
Data Source: https://www.kaggle.com/worldbank/world-development-indicators <br> Folder: 'world-development-indicators'

# Using Folium Library for Geographic Overlays

### Further exploring CO2 Emissions per capita in the World Development Indicators Dataset



```python
import folium
import pandas as pd
```

### Country coordinates for plotting

source: https://github.com/python-visualization/folium/blob/master/examples/data/world-countries.json


```python
country_geo = 'geo/world-countries.json'
```


```python
# Read in the World Development Indicators Database
data = pd.read_csv('world-development-indicators/Indicators.csv')
data.shape
```




    (5656458, 6)




```python
data.head()
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>CountryName</th>
      <th>CountryCode</th>
      <th>IndicatorName</th>
      <th>IndicatorCode</th>
      <th>Year</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Arab World</td>
      <td>ARB</td>
      <td>Adolescent fertility rate (births per 1,000 wo...</td>
      <td>SP.ADO.TFRT</td>
      <td>1960</td>
      <td>1.335609e+02</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Arab World</td>
      <td>ARB</td>
      <td>Age dependency ratio (% of working-age populat...</td>
      <td>SP.POP.DPND</td>
      <td>1960</td>
      <td>8.779760e+01</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Arab World</td>
      <td>ARB</td>
      <td>Age dependency ratio, old (% of working-age po...</td>
      <td>SP.POP.DPND.OL</td>
      <td>1960</td>
      <td>6.634579e+00</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Arab World</td>
      <td>ARB</td>
      <td>Age dependency ratio, young (% of working-age ...</td>
      <td>SP.POP.DPND.YG</td>
      <td>1960</td>
      <td>8.102333e+01</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Arab World</td>
      <td>ARB</td>
      <td>Arms exports (SIPRI trend indicator values)</td>
      <td>MS.MIL.XPRT.KD</td>
      <td>1960</td>
      <td>3.000000e+06</td>
    </tr>
  </tbody>
</table>
</div>



Pull out CO2 emisions for every country in 2011


```python
# select CO2 emissions for all countries in 2011
hist_indicator = 'CO2 emissions \(metric'
hist_year = 2011

mask1 = data['IndicatorName'].str.contains(hist_indicator) 
mask2 = data['Year'].isin([hist_year])

# apply our mask
stage = data[mask1 & mask2]
stage.head()
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>CountryName</th>
      <th>CountryCode</th>
      <th>IndicatorName</th>
      <th>IndicatorCode</th>
      <th>Year</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>5026275</th>
      <td>Arab World</td>
      <td>ARB</td>
      <td>CO2 emissions (metric tons per capita)</td>
      <td>EN.ATM.CO2E.PC</td>
      <td>2011</td>
      <td>4.724500</td>
    </tr>
    <tr>
      <th>5026788</th>
      <td>Caribbean small states</td>
      <td>CSS</td>
      <td>CO2 emissions (metric tons per capita)</td>
      <td>EN.ATM.CO2E.PC</td>
      <td>2011</td>
      <td>9.692960</td>
    </tr>
    <tr>
      <th>5027295</th>
      <td>Central Europe and the Baltics</td>
      <td>CEB</td>
      <td>CO2 emissions (metric tons per capita)</td>
      <td>EN.ATM.CO2E.PC</td>
      <td>2011</td>
      <td>6.911131</td>
    </tr>
    <tr>
      <th>5027870</th>
      <td>East Asia &amp; Pacific (all income levels)</td>
      <td>EAS</td>
      <td>CO2 emissions (metric tons per capita)</td>
      <td>EN.ATM.CO2E.PC</td>
      <td>2011</td>
      <td>5.859548</td>
    </tr>
    <tr>
      <th>5028456</th>
      <td>East Asia &amp; Pacific (developing only)</td>
      <td>EAP</td>
      <td>CO2 emissions (metric tons per capita)</td>
      <td>EN.ATM.CO2E.PC</td>
      <td>2011</td>
      <td>5.302499</td>
    </tr>
  </tbody>
</table>
</div>



### Setup our data for plotting.  

Create a data frame with just the country codes and the values we want plotted.


```python
plot_data = stage[['CountryCode','Value']]
plot_data.head()
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>CountryCode</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>5026275</th>
      <td>ARB</td>
      <td>4.724500</td>
    </tr>
    <tr>
      <th>5026788</th>
      <td>CSS</td>
      <td>9.692960</td>
    </tr>
    <tr>
      <th>5027295</th>
      <td>CEB</td>
      <td>6.911131</td>
    </tr>
    <tr>
      <th>5027870</th>
      <td>EAS</td>
      <td>5.859548</td>
    </tr>
    <tr>
      <th>5028456</th>
      <td>EAP</td>
      <td>5.302499</td>
    </tr>
  </tbody>
</table>
</div>




```python
# label for the legend
hist_indicator = stage.iloc[0]['IndicatorName']
```

## Visualize CO2 emissions per capita using Folium

Folium provides interactive maps with the ability to create sophisticated overlays for data visualization


```python
# Setup a folium map at a high-level zoom @Alok - what is the 100,0, doesn't seem like lat long
map = folium.Map(location=[100, 0], zoom_start=1.5)
```


```python
# choropleth maps bind Pandas Data Frames and json geometries.  This allows us to quickly visualize data combinations
map.choropleth(geo_path=country_geo, data=plot_data,
             columns=['CountryCode', 'Value'],
             key_on='feature.id',
             fill_color='YlGnBu', fill_opacity=0.7, line_opacity=0.2,
             legend_name=hist_indicator)
```


```python
# Create Folium plot
map.save('plot_data.html')
```


```python
# Import the Folium interactive html file
from IPython.display import HTML
HTML('<iframe src=plot_data.html width=700 height=450></iframe>')
```




<iframe src=plot_data.html width=700 height=450></iframe>



More Folium Examples can be found at:<br>
https://folium.readthedocs.io/en/latest/quickstart.html#getting-started <br>

Documentation at:<br>
https://media.readthedocs.org/pdf/folium/latest/folium.pdf


```python

```

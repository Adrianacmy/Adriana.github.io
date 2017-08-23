---
layout: post
category: data
tags: [data, python,matplotlib, test, data-science]
comments: true
---

```python
# Data Source: https://www.kaggle.com/worldbank/world-development-indicators
# Folder: 'world-development-indicators'
```

<p style="font-family: Arial; font-size:3.75em;color:purple; font-style:bold">
Matplotlib: Exploring Data Visualization</p>

<center><h1 style="font-size:2em;color:#2467C0">World Development Indicators</h1></center>

<table>
<col width="550">
<col width="450">
<tr>
<td><img src="https://upload.wikimedia.org/wikipedia/commons/4/46/North_South_divide.svg" align="middle" style="width:550px;height:360px;"/></td>
<td>
This week, we will be using an open dataset from <a href="https://www.kaggle.com">Kaggle</a>. It is  <a href="https://www.kaggle.com/worldbank/world-development-indicators">The World Development Indicators</a> dataset obtained from the World Bank containing over a thousand annual indicators of economic development from hundreds of countries around the world.
<br>
<br>
This is a slightly modified version of the original dataset from <a href="http://data.worldbank.org/data-catalog/world-development-indicators">The World Bank</a>
<br>
<br>
List of the <a href="https://www.kaggle.com/benhamner/d/worldbank/world-development-indicators/indicators-in-data">available indicators</a> and a <a href="https://www.kaggle.com/benhamner/d/worldbank/world-development-indicators/countries-in-the-wdi-data">list of the available countries</a>.
</td>
</tr>
</table>

# Step 1: Initial exploration of the Dataset


```python
import pandas as pd
import numpy as np
import random
import matplotlib.pyplot as plt
```


```python
data = pd.read_csv('./Indicators.csv')
data.shape
```


    ---------------------------------------------------------------------------

    FileNotFoundError                         Traceback (most recent call last)

    <ipython-input-3-6264934b63b0> in <module>()
    ----> 1 data = pd.read_csv('./Indicators.csv')
          2 data.shape


    /usr/lib/python3/dist-packages/pandas/io/parsers.py in parser_f(filepath_or_buffer, sep, delimiter, header, names, index_col, usecols, squeeze, prefix, mangle_dupe_cols, dtype, engine, converters, true_values, false_values, skipinitialspace, skiprows, nrows, na_values, keep_default_na, na_filter, verbose, skip_blank_lines, parse_dates, infer_datetime_format, keep_date_col, date_parser, dayfirst, iterator, chunksize, compression, thousands, decimal, lineterminator, quotechar, quoting, escapechar, comment, encoding, dialect, tupleize_cols, error_bad_lines, warn_bad_lines, skipfooter, skip_footer, doublequote, delim_whitespace, as_recarray, compact_ints, use_unsigned, low_memory, buffer_lines, memory_map, float_precision)
        644                     skip_blank_lines=skip_blank_lines)
        645 
    --> 646         return _read(filepath_or_buffer, kwds)
        647 
        648     parser_f.__name__ = name


    /usr/lib/python3/dist-packages/pandas/io/parsers.py in _read(filepath_or_buffer, kwds)
        387 
        388     # Create the parser.
    --> 389     parser = TextFileReader(filepath_or_buffer, **kwds)
        390 
        391     if (nrows is not None) and (chunksize is not None):


    /usr/lib/python3/dist-packages/pandas/io/parsers.py in __init__(self, f, engine, **kwds)
        728             self.options['has_index_names'] = kwds['has_index_names']
        729 
    --> 730         self._make_engine(self.engine)
        731 
        732     def close(self):


    /usr/lib/python3/dist-packages/pandas/io/parsers.py in _make_engine(self, engine)
        921     def _make_engine(self, engine='c'):
        922         if engine == 'c':
    --> 923             self._engine = CParserWrapper(self.f, **self.options)
        924         else:
        925             if engine == 'python':


    /usr/lib/python3/dist-packages/pandas/io/parsers.py in __init__(self, src, **kwds)
       1388         kwds['allow_leading_cols'] = self.index_col is not False
       1389 
    -> 1390         self._reader = _parser.TextReader(src, **kwds)
       1391 
       1392         # XXX


    pandas/parser.pyx in pandas.parser.TextReader.__cinit__ (pandas/parser.c:4184)()


    pandas/parser.pyx in pandas.parser.TextReader._setup_parser_source (pandas/parser.c:8449)()


    FileNotFoundError: File b'./Indicators.csv' does not exist


This is a really large dataset, at least in terms of the number of rows.  But with 6 columns, what does this hold?


```python
data.head(10)
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
    <tr>
      <th>5</th>
      <td>Arab World</td>
      <td>ARB</td>
      <td>Arms imports (SIPRI trend indicator values)</td>
      <td>MS.MIL.MPRT.KD</td>
      <td>1960</td>
      <td>5.380000e+08</td>
    </tr>
    <tr>
      <th>6</th>
      <td>Arab World</td>
      <td>ARB</td>
      <td>Birth rate, crude (per 1,000 people)</td>
      <td>SP.DYN.CBRT.IN</td>
      <td>1960</td>
      <td>4.769789e+01</td>
    </tr>
    <tr>
      <th>7</th>
      <td>Arab World</td>
      <td>ARB</td>
      <td>CO2 emissions (kt)</td>
      <td>EN.ATM.CO2E.KT</td>
      <td>1960</td>
      <td>5.956399e+04</td>
    </tr>
    <tr>
      <th>8</th>
      <td>Arab World</td>
      <td>ARB</td>
      <td>CO2 emissions (metric tons per capita)</td>
      <td>EN.ATM.CO2E.PC</td>
      <td>1960</td>
      <td>6.439635e-01</td>
    </tr>
    <tr>
      <th>9</th>
      <td>Arab World</td>
      <td>ARB</td>
      <td>CO2 emissions from gaseous fuel consumption (%...</td>
      <td>EN.ATM.CO2E.GF.ZS</td>
      <td>1960</td>
      <td>5.041292e+00</td>
    </tr>
  </tbody>
</table>
</div>



Looks like it has different indicators for different countries with the year and value of the indicator. 

### How many UNIQUE country names are there ?


```python
countries = data['CountryName'].unique().tolist()
len(countries)
```




    247



### Are there same number of country codes ?


```python
# How many unique country codes are there ? (should be the same #)
countryCodes = data['CountryCode'].unique().tolist()
len(countryCodes)
```




    247



### Are there many indicators or few ?


```python
# How many unique indicators are there ? (should be the same #)
indicators = data['IndicatorName'].unique().tolist()
len(indicators)
```




    1344



### How many years of data do we have ?


```python
# How many years of data do we have ?
years = data['Year'].unique().tolist()
len(years)
```




    56



### What's the range of years?


```python
print(min(years)," to ",max(years))
```

    1960  to  2015


<p style="font-family: Arial; font-size:2.5em;color:blue; font-style:bold">
Matplotlib: Basic Plotting, Part 1</p><br>

### Lets pick a country and an indicator to explore: CO2 Emissions per capita and the USA


```python
# select CO2 emissions for the United States
hist_indicator = 'CO2 emissions \(metric'
hist_country = 'USA'

mask1 = data['IndicatorName'].str.contains(hist_indicator) 
mask2 = data['CountryCode'].str.contains(hist_country)

# stage is just those indicators matching the USA for country code and CO2 emissions over time.
stage = data[mask1 & mask2]
```


```python
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
      <th>22232</th>
      <td>United States</td>
      <td>USA</td>
      <td>CO2 emissions (metric tons per capita)</td>
      <td>EN.ATM.CO2E.PC</td>
      <td>1960</td>
      <td>15.999779</td>
    </tr>
    <tr>
      <th>48708</th>
      <td>United States</td>
      <td>USA</td>
      <td>CO2 emissions (metric tons per capita)</td>
      <td>EN.ATM.CO2E.PC</td>
      <td>1961</td>
      <td>15.681256</td>
    </tr>
    <tr>
      <th>77087</th>
      <td>United States</td>
      <td>USA</td>
      <td>CO2 emissions (metric tons per capita)</td>
      <td>EN.ATM.CO2E.PC</td>
      <td>1962</td>
      <td>16.013937</td>
    </tr>
    <tr>
      <th>105704</th>
      <td>United States</td>
      <td>USA</td>
      <td>CO2 emissions (metric tons per capita)</td>
      <td>EN.ATM.CO2E.PC</td>
      <td>1963</td>
      <td>16.482762</td>
    </tr>
    <tr>
      <th>134742</th>
      <td>United States</td>
      <td>USA</td>
      <td>CO2 emissions (metric tons per capita)</td>
      <td>EN.ATM.CO2E.PC</td>
      <td>1964</td>
      <td>16.968119</td>
    </tr>
  </tbody>
</table>
</div>



### Let's see how emissions have changed over time using MatplotLib


```python
# get the years
years = stage['Year'].values
# get the values 
co2 = stage['Value'].values

# create
plt.bar(years,co2)
plt.show()
```


![png](output_24_0.png)


Turns out emissions per capita have dropped a bit over time, but let's make this graphic a bit more appealing before we continue to explore it.


```python
# switch to a line plot
plt.plot(stage['Year'].values, stage['Value'].values)

# Label the axes
plt.xlabel('Year')
plt.ylabel(stage['IndicatorName'].iloc[0])

#label the figure
plt.title('CO2 Emissions in USA')

# to make more honest, start they y axis at 0
plt.axis([1959, 2011,0,25])

plt.show()
```


![png](output_26_0.png)


### Using Histograms to explore the distribution of values
We could also visualize this data as a histogram to better explore the ranges of values in CO2 production per year. 


```python
# If you want to just include those within one standard deviation fo the mean, you could do the following
# lower = stage['Value'].mean() - stage['Value'].std()
# upper = stage['Value'].mean() + stage['Value'].std()
# hist_data = [x for x in stage[:10000]['Value'] if x>lower and x<upper ]

# Otherwise, let's look at all the data
hist_data = stage['Value'].values
```


```python
print(len(hist_data))
```

    52



```python
# the histogram of the data
plt.hist(hist_data, 10, normed=False, facecolor='green')

plt.xlabel(stage['IndicatorName'].iloc[0])
plt.ylabel('# of Years')
plt.title('Histogram Example')

plt.grid(True)

plt.show()
```


![png](output_30_0.png)


So the USA has many years where it produced between 19-20 metric tons per capita with outliers on either side.

### But how do the USA's numbers relate to those of other countries?


```python
# select CO2 emissions for all countries in 2011
hist_indicator = 'CO2 emissions \(metric'
hist_year = 2011

mask1 = data['IndicatorName'].str.contains(hist_indicator) 
mask2 = data['Year'].isin([hist_year])

# apply our mask
co2_2011 = data[mask1 & mask2]
co2_2011.head()
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



For how many countries do we have CO2 per capita emissions data in 2011


```python
print(len(co2_2011))
```

    232



```python
# let's plot a histogram of the emmissions per capita by country

# subplots returns a touple with the figure, axis attributes.
fig, ax = plt.subplots()

ax.annotate("USA",
            xy=(18, 5), xycoords='data',
            xytext=(18, 30), textcoords='data',
            arrowprops=dict(arrowstyle="->",
                            connectionstyle="arc3"),
            )

plt.hist(co2_2011['Value'], 10, normed=False, facecolor='green')

plt.xlabel(stage['IndicatorName'].iloc[0])
plt.ylabel('# of Countries')
plt.title('Histogram of CO2 Emissions Per Capita')

#plt.axis([10, 22, 0, 14])
plt.grid(True)

plt.show()
```


![png](output_36_0.png)


So the USA, at ~18 CO2 emissions (metric tons per capital) is quite high among all countries.

An interesting next step, which we'll save for you, would be to explore how this relates to other industrialized nations and to look at the outliers with those values in the 40s!

<p style="font-family: Arial; font-size:2.0em;color:blue; font-style:bold">
Matplotlib: Basic Plotting, Part 2</p>

### Relationship between GPD and CO2 Emissions in USA


```python
# select GDP Per capita emissions for the United States
hist_indicator = 'GDP per capita \(constant 2005'
hist_country = 'USA'

mask1 = data['IndicatorName'].str.contains(hist_indicator) 
mask2 = data['CountryCode'].str.contains(hist_country)

# stage is just those indicators matching the USA for country code and CO2 emissions over time.
gdp_stage = data[mask1 & mask2]

#plot gdp_stage vs stage
```


```python
gdp_stage.head(2)
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
      <th>22282</th>
      <td>United States</td>
      <td>USA</td>
      <td>GDP per capita (constant 2005 US$)</td>
      <td>NY.GDP.PCAP.KD</td>
      <td>1960</td>
      <td>15482.707760</td>
    </tr>
    <tr>
      <th>48759</th>
      <td>United States</td>
      <td>USA</td>
      <td>GDP per capita (constant 2005 US$)</td>
      <td>NY.GDP.PCAP.KD</td>
      <td>1961</td>
      <td>15578.409657</td>
    </tr>
  </tbody>
</table>
</div>




```python
stage.head(2)
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
      <th>22232</th>
      <td>United States</td>
      <td>USA</td>
      <td>CO2 emissions (metric tons per capita)</td>
      <td>EN.ATM.CO2E.PC</td>
      <td>1960</td>
      <td>15.999779</td>
    </tr>
    <tr>
      <th>48708</th>
      <td>United States</td>
      <td>USA</td>
      <td>CO2 emissions (metric tons per capita)</td>
      <td>EN.ATM.CO2E.PC</td>
      <td>1961</td>
      <td>15.681256</td>
    </tr>
  </tbody>
</table>
</div>




```python
# switch to a line plot
plt.plot(gdp_stage['Year'].values, gdp_stage['Value'].values)

# Label the axes
plt.xlabel('Year')
plt.ylabel(gdp_stage['IndicatorName'].iloc[0])

#label the figure
plt.title('GDP Per Capita USA')

# to make more honest, start they y axis at 0
#plt.axis([1959, 2011,0,25])

plt.show()
```


![png](output_43_0.png)


So although we've seen a decline in the CO2 emissions per capita, it does not seem to translate to a decline in GDP per capita

### ScatterPlot for comparing GDP against CO2 emissions (per capita)

First, we'll need to make sure we're looking at the same time frames


```python
print("GDP Min Year = ", gdp_stage['Year'].min(), "max: ", gdp_stage['Year'].max())
print("CO2 Min Year = ", stage['Year'].min(), "max: ", stage['Year'].max())
```

    GDP Min Year =  1960 max:  2014
    CO2 Min Year =  1960 max:  2011


We have 3 extra years of GDP data, so let's trim those off so the scatterplot has equal length arrays to compare (this is actually required by scatterplot)


```python
gdp_stage_trunc = gdp_stage[gdp_stage['Year'] < 2012]
print(len(gdp_stage_trunc))
print(len(stage))
```

    52
    52



```python
%matplotlib inline
import matplotlib.pyplot as plt

fig, axis = plt.subplots()
# Grid lines, Xticks, Xlabel, Ylabel

axis.yaxis.grid(True)
axis.set_title('CO2 Emissions vs. GDP \(per capita\)',fontsize=10)
axis.set_xlabel(gdp_stage_trunc['IndicatorName'].iloc[0],fontsize=10)
axis.set_ylabel(stage['IndicatorName'].iloc[0],fontsize=10)

X = gdp_stage_trunc['Value']
Y = stage['Value']

axis.scatter(X, Y)
plt.show()
```


![png](output_49_0.png)


This doesn't look like a strong relationship.  We can test this by looking at correlation.


```python
np.corrcoef(gdp_stage_trunc['Value'],stage['Value'])
```




    array([[ 1.        ,  0.07676005],
           [ 0.07676005,  1.        ]])



A correlation of 0.07 is pretty weak, but you'll learn more about correlation in the next course.

You could continue to explore this to see if other countries have a closer relationship between CO2 emissions and GDP.  Perhaps it is stronger for developing countries?

## Want more ? 

### Matplotlib Examples Library

http://matplotlib.org/examples/index.html


```python
%%javascript
IPython.OutputArea.auto_scroll_threshold = 9999;
```

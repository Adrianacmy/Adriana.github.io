---
layout: post
category: data
tags: [data, python,pandas, test]
comments: true
---
<span style="font-family: Arial; font-size:3.75em;color:purple; font-style:bold">
Pandas</span>

*pandas* is a Python library for data analysis. It offers a number of data exploration, cleaning and transformation operations that are critical in working with data in Python. 

*pandas* build upon *numpy* and *scipy* providing easy-to-use data structures and data manipulation functions with integrated indexing.

The main data structures *pandas* provides are *Series* and *DataFrames*. After a brief introduction to these two data structures and data ingestion, the key features of *pandas* this notebook covers are:
* Generating descriptive statistics on data
* Data cleaning using built in pandas functions
* Frequent data operations for subsetting, filtering, insertion, deletion and aggregation of data
* Merging multiple datasets using dataframes
* Working with timestamps and time-series data

**Additional Recommended Resources:**
* *pandas* Documentation: http://pandas.pydata.org/pandas-docs/stable/
* *Python for Data Analysis* by Wes McKinney
* *Python Data Science Handbook* by Jake VanderPlas

Let's get started with our first *pandas* notebook!

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

Import Libraries
</p>


```python
import pandas as pd
```

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold">
Introduction to pandas Data Structures</p>
<br>
*pandas* has two main data structures it uses, namely, *Series* and *DataFrames*. 

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold">
pandas Series</p>

*pandas Series* one-dimensional labeled array. 



```python
ser = pd.Series(['tom', 'bob', 'nancy', 'dan', 'eric'], [100, 'foo', 300, 'bar', 500])
```


```python
ser
```




    100      tom
    foo      bob
    300    nancy
    bar      dan
    500     eric
    dtype: object




```python
ser.index
```




    Index([100, 'foo', 300, 'bar', 500], dtype='object')




```python
ser.loc[['nancy','dan']]
```


    ---------------------------------------------------------------------------

    KeyError                                  Traceback (most recent call last)

    <ipython-input-6-0d47ecb74ce9> in <module>()
    ----> 1 ser.loc[['nancy','dan']]
    

    /usr/lib/python3/dist-packages/pandas/core/indexing.py in __getitem__(self, key)
       1310             return self._getitem_tuple(key)
       1311         else:
    -> 1312             return self._getitem_axis(key, axis=0)
       1313 
       1314     def _getitem_axis(self, key, axis=0):


    /usr/lib/python3/dist-packages/pandas/core/indexing.py in _getitem_axis(self, key, axis)
       1470                     raise ValueError('Cannot index with multidimensional key')
       1471 
    -> 1472                 return self._getitem_iterable(key, axis=axis)
       1473 
       1474             # nested tuple slicing


    /usr/lib/python3/dist-packages/pandas/core/indexing.py in _getitem_iterable(self, key, axis)
       1034     def _getitem_iterable(self, key, axis=0):
       1035         if self._should_validate_iterable(axis):
    -> 1036             self._has_valid_type(key, axis)
       1037 
       1038         labels = self.obj._get_axis(axis)


    /usr/lib/python3/dist-packages/pandas/core/indexing.py in _has_valid_type(self, key, axis)
       1393 
       1394                 raise KeyError("None of [%s] are in the [%s]" %
    -> 1395                                (key, self.obj._get_axis_name(axis)))
       1396 
       1397             return True


    KeyError: "None of [['nancy', 'dan']] are in the [index]"



```python
ser[[4, 3, 1]]
```




    eric    500
    dan     bar
    bob     foo
    dtype: object




```python
ser.iloc[2]
```




    300




```python
'bob' in ser
```




    True




```python
ser
```




    tom      100
    bob      foo
    nancy    300
    dan      bar
    eric     500
    dtype: object




```python
ser * 2
```




    100        tomtom
    foo        bobbob
    300    nancynancy
    bar        dandan
    500      ericeric
    dtype: object




```python
ser[['nancy', 'eric']] ** 2
```




    nancy     90000
    eric     250000
    dtype: object



<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold">
pandas DataFrame</p>

*pandas DataFrame* is a 2-dimensional labeled data structure.

<p style="font-family: Arial; font-size:1.25em;color:#2462C0; font-style:bold">
Create DataFrame from dictionary of Python Series</p>


```python
d = {'one' : pd.Series([100., 200., 300.], index=['apple', 'ball', 'clock']),
     'four' : pd.Series([111., 222., 333., 4444.], index=['apple', 'ball', 'cerill', 'dancy'])}
```


```python
df = pd.DataFrame(d)
print(df)
```

              four    one
    apple    111.0  100.0
    ball     222.0  200.0
    cerill   333.0    NaN
    clock      NaN  300.0
    dancy   4444.0    NaN



```python
df.index
```




    Index(['apple', 'ball', 'cerill', 'clock', 'dancy'], dtype='object')




```python
df.columns
```




    Index(['four', 'one'], dtype='object')




```python
pd.DataFrame(d, index=['dancy', 'ball', 'apple'])
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>four</th>
      <th>one</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>dancy</th>
      <td>4444.0</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>ball</th>
      <td>222.0</td>
      <td>200.0</td>
    </tr>
    <tr>
      <th>apple</th>
      <td>111.0</td>
      <td>100.0</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.DataFrame(d, index=['dancy', 'ball', 'apple'], columns=['two', 'five'])
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>two</th>
      <th>five</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>dancy</th>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>ball</th>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>apple</th>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>



<p style="font-family: Arial; font-size:1.25em;color:#2462C0; font-style:bold">
Create DataFrame from list of Python dictionaries</p>


```python
data = [{'alex': 1, 'joe': 2}, {'ema': 5, 'dora': 10, 'alice': 20}]
```


```python
pd.DataFrame(data)
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>alex</th>
      <th>alice</th>
      <th>dora</th>
      <th>ema</th>
      <th>joe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>NaN</td>
      <td>20.0</td>
      <td>10.0</td>
      <td>5.0</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.DataFrame(data, index=['orange', 'red'])
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>alex</th>
      <th>alice</th>
      <th>dora</th>
      <th>ema</th>
      <th>joe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>orange</th>
      <td>1.0</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>red</th>
      <td>NaN</td>
      <td>20.0</td>
      <td>10.0</td>
      <td>5.0</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.DataFrame(data, columns=['joe', 'dora','alice'])
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>joe</th>
      <th>dora</th>
      <th>alice</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2.0</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>NaN</td>
      <td>10.0</td>
      <td>20.0</td>
    </tr>
  </tbody>
</table>
</div>



<p style="font-family: Arial; font-size:1.25em;color:#2462C0; font-style:bold">
Basic DataFrame operations</p>


```python
df
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>four</th>
      <th>one</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>apple</th>
      <td>111.0</td>
      <td>100.0</td>
    </tr>
    <tr>
      <th>ball</th>
      <td>222.0</td>
      <td>200.0</td>
    </tr>
    <tr>
      <th>cerill</th>
      <td>333.0</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>clock</th>
      <td>NaN</td>
      <td>300.0</td>
    </tr>
    <tr>
      <th>dancy</th>
      <td>4444.0</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>




```python
df['one']
```




    apple     100.0
    ball      200.0
    cerill      NaN
    clock     300.0
    dancy       NaN
    Name: one, dtype: float64




```python
df['three'] = df['one'] * df['two']
df
```


    ---------------------------------------------------------------------------

    KeyError                                  Traceback (most recent call last)

    /usr/lib/python3/dist-packages/pandas/indexes/base.py in get_loc(self, key, method, tolerance)
       2133             try:
    -> 2134                 return self._engine.get_loc(key)
       2135             except KeyError:


    pandas/index.pyx in pandas.index.IndexEngine.get_loc (pandas/index.c:4433)()


    pandas/index.pyx in pandas.index.IndexEngine.get_loc (pandas/index.c:4279)()


    pandas/src/hashtable_class_helper.pxi in pandas.hashtable.PyObjectHashTable.get_item (pandas/hashtable.c:13742)()


    pandas/src/hashtable_class_helper.pxi in pandas.hashtable.PyObjectHashTable.get_item (pandas/hashtable.c:13696)()


    KeyError: 'two'

    
    During handling of the above exception, another exception occurred:


    KeyError                                  Traceback (most recent call last)

    <ipython-input-37-cfb92308f9fa> in <module>()
    ----> 1 df['three'] = df['one'] * df['two']
          2 df


    /usr/lib/python3/dist-packages/pandas/core/frame.py in __getitem__(self, key)
       2057             return self._getitem_multilevel(key)
       2058         else:
    -> 2059             return self._getitem_column(key)
       2060 
       2061     def _getitem_column(self, key):


    /usr/lib/python3/dist-packages/pandas/core/frame.py in _getitem_column(self, key)
       2064         # get column
       2065         if self.columns.is_unique:
    -> 2066             return self._get_item_cache(key)
       2067 
       2068         # duplicate columns & possible reduce dimensionality


    /usr/lib/python3/dist-packages/pandas/core/generic.py in _get_item_cache(self, item)
       1384         res = cache.get(item)
       1385         if res is None:
    -> 1386             values = self._data.get(item)
       1387             res = self._box_item_values(item, values)
       1388             cache[item] = res


    /usr/lib/python3/dist-packages/pandas/core/internals.py in get(self, item, fastpath)
       3541 
       3542             if not isnull(item):
    -> 3543                 loc = self.items.get_loc(item)
       3544             else:
       3545                 indexer = np.arange(len(self.items))[isnull(self.items)]


    /usr/lib/python3/dist-packages/pandas/indexes/base.py in get_loc(self, key, method, tolerance)
       2134                 return self._engine.get_loc(key)
       2135             except KeyError:
    -> 2136                 return self._engine.get_loc(self._maybe_cast_indexer(key))
       2137 
       2138         indexer = self.get_indexer([key], method=method, tolerance=tolerance)


    pandas/index.pyx in pandas.index.IndexEngine.get_loc (pandas/index.c:4433)()


    pandas/index.pyx in pandas.index.IndexEngine.get_loc (pandas/index.c:4279)()


    pandas/src/hashtable_class_helper.pxi in pandas.hashtable.PyObjectHashTable.get_item (pandas/hashtable.c:13742)()


    pandas/src/hashtable_class_helper.pxi in pandas.hashtable.PyObjectHashTable.get_item (pandas/hashtable.c:13696)()


    KeyError: 'two'



```python
df['flag'] = df['one'] > 250
df
```


```python
three = df.pop('three')
```


    ---------------------------------------------------------------------------

    KeyError                                  Traceback (most recent call last)

    /usr/lib/python3/dist-packages/pandas/indexes/base.py in get_loc(self, key, method, tolerance)
       2133             try:
    -> 2134                 return self._engine.get_loc(key)
       2135             except KeyError:


    pandas/index.pyx in pandas.index.IndexEngine.get_loc (pandas/index.c:4433)()


    pandas/index.pyx in pandas.index.IndexEngine.get_loc (pandas/index.c:4279)()


    pandas/src/hashtable_class_helper.pxi in pandas.hashtable.PyObjectHashTable.get_item (pandas/hashtable.c:13742)()


    pandas/src/hashtable_class_helper.pxi in pandas.hashtable.PyObjectHashTable.get_item (pandas/hashtable.c:13696)()


    KeyError: 'three'

    
    During handling of the above exception, another exception occurred:


    KeyError                                  Traceback (most recent call last)

    <ipython-input-35-0c9392260496> in <module>()
    ----> 1 three = df.pop('three')
    

    /usr/lib/python3/dist-packages/pandas/core/generic.py in pop(self, item)
        523         Return item and drop from frame. Raise KeyError if not found.
        524         """
    --> 525         result = self[item]
        526         del self[item]
        527         try:


    /usr/lib/python3/dist-packages/pandas/core/frame.py in __getitem__(self, key)
       2057             return self._getitem_multilevel(key)
       2058         else:
    -> 2059             return self._getitem_column(key)
       2060 
       2061     def _getitem_column(self, key):


    /usr/lib/python3/dist-packages/pandas/core/frame.py in _getitem_column(self, key)
       2064         # get column
       2065         if self.columns.is_unique:
    -> 2066             return self._get_item_cache(key)
       2067 
       2068         # duplicate columns & possible reduce dimensionality


    /usr/lib/python3/dist-packages/pandas/core/generic.py in _get_item_cache(self, item)
       1384         res = cache.get(item)
       1385         if res is None:
    -> 1386             values = self._data.get(item)
       1387             res = self._box_item_values(item, values)
       1388             cache[item] = res


    /usr/lib/python3/dist-packages/pandas/core/internals.py in get(self, item, fastpath)
       3541 
       3542             if not isnull(item):
    -> 3543                 loc = self.items.get_loc(item)
       3544             else:
       3545                 indexer = np.arange(len(self.items))[isnull(self.items)]


    /usr/lib/python3/dist-packages/pandas/indexes/base.py in get_loc(self, key, method, tolerance)
       2134                 return self._engine.get_loc(key)
       2135             except KeyError:
    -> 2136                 return self._engine.get_loc(self._maybe_cast_indexer(key))
       2137 
       2138         indexer = self.get_indexer([key], method=method, tolerance=tolerance)


    pandas/index.pyx in pandas.index.IndexEngine.get_loc (pandas/index.c:4433)()


    pandas/index.pyx in pandas.index.IndexEngine.get_loc (pandas/index.c:4279)()


    pandas/src/hashtable_class_helper.pxi in pandas.hashtable.PyObjectHashTable.get_item (pandas/hashtable.c:13742)()


    pandas/src/hashtable_class_helper.pxi in pandas.hashtable.PyObjectHashTable.get_item (pandas/hashtable.c:13696)()


    KeyError: 'three'



```python
three
```


```python
df
```


```python
del df['two']
```


```python
df
```


```python
df.insert(2, 'copy_of_one', df['one'])
df
```


```python
df['one_upper_half'] = df['one'][:2]
df
```

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold">
Case Study: Movie Data Analysis</p>
<br>This notebook uses a dataset from the MovieLens website. We will describe the dataset further as we explore with it using *pandas*. 

## Download the Dataset

Please note that **you will need to download the dataset**. Although the video for this notebook says that the data is in your folder, the folder turned out to be too large to fit on the edX platform due to size constraints.

Here are the links to the data source and location:
* **Data Source:** MovieLens web site (filename: ml-20m.zip)
* **Location:** https://grouplens.org/datasets/movielens/

Once the download completes, please make sure the data files are in a directory called *movielens* in your *Week-3-pandas* folder. 

Let us look at the files in this dataset using the UNIX command ls.



```python
# Note: Adjust the name of the folder to match your local directory

!ls ./movielens
```


```python
!cat ./movielens/movies.csv | wc -l
```


```python
!head -5 ./movielens/ratings.csv
```

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold">
Use Pandas to Read the Dataset<br>
</p>
<br>
In this notebook, we will be using three CSV files:
* **ratings.csv :** *userId*,*movieId*,*rating*, *timestamp*
* **tags.csv :** *userId*,*movieId*, *tag*, *timestamp*
* **movies.csv :** *movieId*, *title*, *genres* <br>

Using the *read_csv* function in pandas, we will ingest these three files.


```python
movies = pd.read_csv('./movielens/movies.csv', sep=',')
print(type(movies))
movies.head(15)
```

    <class 'pandas.core.frame.DataFrame'>





<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>movieId</th>
      <th>title</th>
      <th>genres</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>Toy Story (1995)</td>
      <td>Adventure|Animation|Children|Comedy|Fantasy</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>Jumanji (1995)</td>
      <td>Adventure|Children|Fantasy</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>Grumpier Old Men (1995)</td>
      <td>Comedy|Romance</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>Waiting to Exhale (1995)</td>
      <td>Comedy|Drama|Romance</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>Father of the Bride Part II (1995)</td>
      <td>Comedy</td>
    </tr>
    <tr>
      <th>5</th>
      <td>6</td>
      <td>Heat (1995)</td>
      <td>Action|Crime|Thriller</td>
    </tr>
    <tr>
      <th>6</th>
      <td>7</td>
      <td>Sabrina (1995)</td>
      <td>Comedy|Romance</td>
    </tr>
    <tr>
      <th>7</th>
      <td>8</td>
      <td>Tom and Huck (1995)</td>
      <td>Adventure|Children</td>
    </tr>
    <tr>
      <th>8</th>
      <td>9</td>
      <td>Sudden Death (1995)</td>
      <td>Action</td>
    </tr>
    <tr>
      <th>9</th>
      <td>10</td>
      <td>GoldenEye (1995)</td>
      <td>Action|Adventure|Thriller</td>
    </tr>
    <tr>
      <th>10</th>
      <td>11</td>
      <td>American President, The (1995)</td>
      <td>Comedy|Drama|Romance</td>
    </tr>
    <tr>
      <th>11</th>
      <td>12</td>
      <td>Dracula: Dead and Loving It (1995)</td>
      <td>Comedy|Horror</td>
    </tr>
    <tr>
      <th>12</th>
      <td>13</td>
      <td>Balto (1995)</td>
      <td>Adventure|Animation|Children</td>
    </tr>
    <tr>
      <th>13</th>
      <td>14</td>
      <td>Nixon (1995)</td>
      <td>Drama</td>
    </tr>
    <tr>
      <th>14</th>
      <td>15</td>
      <td>Cutthroat Island (1995)</td>
      <td>Action|Adventure|Romance</td>
    </tr>
  </tbody>
</table>
</div>




```python
!cat ./movielens/movies.csv | wc -l
```

    27279



```python
# Timestamps represent seconds since midnight Coordinated Universal Time (UTC) of January 1, 1970

tags = pd.read_csv('./movielens/tags.csv', sep=',')
tags.head()
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>userId</th>
      <th>movieId</th>
      <th>tag</th>
      <th>timestamp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>18</td>
      <td>4141</td>
      <td>Mark Waters</td>
      <td>1240597180</td>
    </tr>
    <tr>
      <th>1</th>
      <td>65</td>
      <td>208</td>
      <td>dark hero</td>
      <td>1368150078</td>
    </tr>
    <tr>
      <th>2</th>
      <td>65</td>
      <td>353</td>
      <td>dark hero</td>
      <td>1368150079</td>
    </tr>
    <tr>
      <th>3</th>
      <td>65</td>
      <td>521</td>
      <td>noir thriller</td>
      <td>1368149983</td>
    </tr>
    <tr>
      <th>4</th>
      <td>65</td>
      <td>592</td>
      <td>dark hero</td>
      <td>1368150078</td>
    </tr>
  </tbody>
</table>
</div>




```python
ratings = pd.read_csv('./movielens/ratings.csv', sep=',', parse_dates=['timestamp'])
ratings.head()
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>userId</th>
      <th>movieId</th>
      <th>rating</th>
      <th>timestamp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>2</td>
      <td>3.5</td>
      <td>1112486027</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>29</td>
      <td>3.5</td>
      <td>1112484676</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1</td>
      <td>32</td>
      <td>3.5</td>
      <td>1112484819</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1</td>
      <td>47</td>
      <td>3.5</td>
      <td>1112484727</td>
    </tr>
    <tr>
      <th>4</th>
      <td>1</td>
      <td>50</td>
      <td>3.5</td>
      <td>1112484580</td>
    </tr>
  </tbody>
</table>
</div>




```python
# For current analysis, we will remove timestamp (we will come back to it!)

del ratings['timestamp']
del tags['timestamp']
```

<h1 style="font-size:2em;color:#2467C0">Data Structures </h1>

<h1 style="font-size:1.5em;color:#2467C0">Series</h1>


```python
#Extract 0th row: notice that it is infact a Series

row_0 = tags.iloc[0]
type(row_0)
```




    pandas.core.series.Series




```python
print(row_0)
```

    userId              18
    movieId           4141
    tag        Mark Waters
    Name: 0, dtype: object



```python
row_0.index
```




    Index(['userId', 'movieId', 'tag'], dtype='object')




```python
row_0['userId']
```




    18




```python
'rating' in row_0
```




    False




```python
row_0.name
```




    0




```python
row_0 = row_0.rename('first_row')
row_0.name
```




    'first_row'



<h1 style="font-size:1.5em;color:#2467C0">DataFrames </h1>


```python
tags.head()
```


```python
tags.index
```


```python
tags.columns
```


```python
# Extract row 0, 11, 2000 from DataFrame

tags.iloc[ [0,11,2000] ]
```

<h1 style="font-size:2em;color:#2467C0">Descriptive Statistics</h1>

Let's look how the ratings are distributed! 


```python
ratings['rating'].describe()
```


```python
ratings.describe()
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>userId</th>
      <th>movieId</th>
      <th>rating</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>2.000026e+07</td>
      <td>2.000026e+07</td>
      <td>2.000026e+07</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>6.904587e+04</td>
      <td>9.041567e+03</td>
      <td>3.525529e+00</td>
    </tr>
    <tr>
      <th>std</th>
      <td>4.003863e+04</td>
      <td>1.978948e+04</td>
      <td>1.051989e+00</td>
    </tr>
    <tr>
      <th>min</th>
      <td>1.000000e+00</td>
      <td>1.000000e+00</td>
      <td>5.000000e-01</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>3.439500e+04</td>
      <td>9.020000e+02</td>
      <td>3.000000e+00</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>6.914100e+04</td>
      <td>2.167000e+03</td>
      <td>3.500000e+00</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>1.036370e+05</td>
      <td>4.770000e+03</td>
      <td>4.000000e+00</td>
    </tr>
    <tr>
      <th>max</th>
      <td>1.384930e+05</td>
      <td>1.312620e+05</td>
      <td>5.000000e+00</td>
    </tr>
  </tbody>
</table>
</div>




```python
ratings['rating'].mean()
```




    3.5255285642993797




```python
ratings.mean()
```




    userId     69045.872583
    movieId     9041.567330
    rating         3.525529
    dtype: float64




```python
ratings['rating'].min()
```




    0.5




```python
ratings['rating'].max()
```




    5.0




```python
ratings['rating'].std()
```




    1.0519889192942424




```python
ratings['rating'].mode()
```




    0    4.0
    dtype: float64




```python
ratings.corr()
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>userId</th>
      <th>movieId</th>
      <th>rating</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>userId</th>
      <td>1.000000</td>
      <td>-0.000850</td>
      <td>0.001175</td>
    </tr>
    <tr>
      <th>movieId</th>
      <td>-0.000850</td>
      <td>1.000000</td>
      <td>0.002606</td>
    </tr>
    <tr>
      <th>rating</th>
      <td>0.001175</td>
      <td>0.002606</td>
      <td>1.000000</td>
    </tr>
  </tbody>
</table>
</div>




```python
filter_1 = ratings['rating'] > 5
print(filter_1)
filter_1.any()
```

    0           False
    1           False
    2           False
    3           False
    4           False
    5           False
    6           False
    7           False
    8           False
    9           False
    10          False
    11          False
    12          False
    13          False
    14          False
    15          False
    16          False
    17          False
    18          False
    19          False
    20          False
    21          False
    22          False
    23          False
    24          False
    25          False
    26          False
    27          False
    28          False
    29          False
                ...  
    20000233    False
    20000234    False
    20000235    False
    20000236    False
    20000237    False
    20000238    False
    20000239    False
    20000240    False
    20000241    False
    20000242    False
    20000243    False
    20000244    False
    20000245    False
    20000246    False
    20000247    False
    20000248    False
    20000249    False
    20000250    False
    20000251    False
    20000252    False
    20000253    False
    20000254    False
    20000255    False
    20000256    False
    20000257    False
    20000258    False
    20000259    False
    20000260    False
    20000261    False
    20000262    False
    Name: rating, dtype: bool





    False




```python
filter_2 = ratings['rating'] > 0
filter_2.all()
```




    True



<h1 style="font-size:2em;color:#2467C0">Data Cleaning: Handling Missing Data</h1>


```python
movies.shape
```




    (27278, 3)




```python
#is any row NULL ?

movies.isnull().any()
```




    movieId    False
    title      False
    genres     False
    dtype: bool



Thats nice ! No NULL values !


```python
ratings.shape
```




    (20000263, 3)




```python
#is any row NULL ?

ratings.isnull().any()
```




    userId     False
    movieId    False
    rating     False
    dtype: bool



Thats nice ! No NULL values !


```python
tags.shape
```




    (465564, 3)




```python
#is any row NULL ?

tags.isnull().any()
```




    userId     False
    movieId    False
    tag         True
    dtype: bool



We have some tags which are NULL.


```python
tags = tags.dropna()
```


```python
#Check again: is any row NULL ?

tags.isnull().any()
```




    userId     False
    movieId    False
    tag        False
    dtype: bool




```python
tags.shape
```




    (465548, 3)



Thats nice ! No NULL values ! Notice the number of lines have reduced.

<h1 style="font-size:2em;color:#2467C0">Data Visualization</h1>


```python
%matplotlib inline

ratings.hist(column='rating', figsize=(15,10))
```




    array([[<matplotlib.axes._subplots.AxesSubplot object at 0x7fa385607128>]], dtype=object)




![png](output_90_1.png)



```python
ratings.boxplot(column='rating', figsize=(15,20))
```




    <matplotlib.axes._subplots.AxesSubplot at 0x7fa3855f5128>




![png](output_91_1.png)


<h1 style="font-size:2em;color:#2467C0">Slicing Out Columns</h1>
 


```python
tags['tag'].head()
```




    0      Mark Waters
    1        dark hero
    2        dark hero
    3    noir thriller
    4        dark hero
    Name: tag, dtype: object




```python
movies[['title','genres']].head()
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>title</th>
      <th>genres</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Toy Story (1995)</td>
      <td>Adventure|Animation|Children|Comedy|Fantasy</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Jumanji (1995)</td>
      <td>Adventure|Children|Fantasy</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Grumpier Old Men (1995)</td>
      <td>Comedy|Romance</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Waiting to Exhale (1995)</td>
      <td>Comedy|Drama|Romance</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Father of the Bride Part II (1995)</td>
      <td>Comedy</td>
    </tr>
  </tbody>
</table>
</div>




```python
ratings[-10:]
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>userId</th>
      <th>movieId</th>
      <th>rating</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>20000253</th>
      <td>138493</td>
      <td>60816</td>
      <td>4.5</td>
    </tr>
    <tr>
      <th>20000254</th>
      <td>138493</td>
      <td>61160</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>20000255</th>
      <td>138493</td>
      <td>65682</td>
      <td>4.5</td>
    </tr>
    <tr>
      <th>20000256</th>
      <td>138493</td>
      <td>66762</td>
      <td>4.5</td>
    </tr>
    <tr>
      <th>20000257</th>
      <td>138493</td>
      <td>68319</td>
      <td>4.5</td>
    </tr>
    <tr>
      <th>20000258</th>
      <td>138493</td>
      <td>68954</td>
      <td>4.5</td>
    </tr>
    <tr>
      <th>20000259</th>
      <td>138493</td>
      <td>69526</td>
      <td>4.5</td>
    </tr>
    <tr>
      <th>20000260</th>
      <td>138493</td>
      <td>69644</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th>20000261</th>
      <td>138493</td>
      <td>70286</td>
      <td>5.0</td>
    </tr>
    <tr>
      <th>20000262</th>
      <td>138493</td>
      <td>71619</td>
      <td>2.5</td>
    </tr>
  </tbody>
</table>
</div>




```python
tag_counts = tags['tag'].value_counts()
tag_counts[-10:]
```




    frank black          1
    Leatherface          1
    kamikaze             1
    volcanic eruption    1
    The Ritz Brothers    1
    X-Men II             1
    MOLT_LENTA           1
    Korkoro              1
    duct taped mouths    1
    Stephanie Black      1
    Name: tag, dtype: int64




```python
tag_counts[:10].plot(kind='bar', figsize=(15,10))
```




    <matplotlib.axes._subplots.AxesSubplot at 0x7fa384090e10>




![png](output_97_1.png)


<h1 style="font-size:2em;color:#2467C0">Filters for Selecting Rows</h1>


```python
is_highly_rated = ratings['rating'] >= 4.0

ratings[is_highly_rated][30:50]
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>userId</th>
      <th>movieId</th>
      <th>rating</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>68</th>
      <td>1</td>
      <td>2021</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>69</th>
      <td>1</td>
      <td>2100</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>70</th>
      <td>1</td>
      <td>2118</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>71</th>
      <td>1</td>
      <td>2138</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>72</th>
      <td>1</td>
      <td>2140</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>73</th>
      <td>1</td>
      <td>2143</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>74</th>
      <td>1</td>
      <td>2173</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>75</th>
      <td>1</td>
      <td>2174</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>76</th>
      <td>1</td>
      <td>2193</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>79</th>
      <td>1</td>
      <td>2288</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>80</th>
      <td>1</td>
      <td>2291</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>81</th>
      <td>1</td>
      <td>2542</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>82</th>
      <td>1</td>
      <td>2628</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>90</th>
      <td>1</td>
      <td>2762</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>92</th>
      <td>1</td>
      <td>2872</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>94</th>
      <td>1</td>
      <td>2944</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>96</th>
      <td>1</td>
      <td>2959</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>97</th>
      <td>1</td>
      <td>2968</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>101</th>
      <td>1</td>
      <td>3081</td>
      <td>4.0</td>
    </tr>
    <tr>
      <th>102</th>
      <td>1</td>
      <td>3153</td>
      <td>4.0</td>
    </tr>
  </tbody>
</table>
</div>




```python
is_animation = movies['genres'].str.contains('Animation')

movies[is_animation][5:15]
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>movieId</th>
      <th>title</th>
      <th>genres</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>310</th>
      <td>313</td>
      <td>Swan Princess, The (1994)</td>
      <td>Animation|Children</td>
    </tr>
    <tr>
      <th>360</th>
      <td>364</td>
      <td>Lion King, The (1994)</td>
      <td>Adventure|Animation|Children|Drama|Musical|IMAX</td>
    </tr>
    <tr>
      <th>388</th>
      <td>392</td>
      <td>Secret Adventures of Tom Thumb, The (1993)</td>
      <td>Adventure|Animation</td>
    </tr>
    <tr>
      <th>547</th>
      <td>551</td>
      <td>Nightmare Before Christmas, The (1993)</td>
      <td>Animation|Children|Fantasy|Musical</td>
    </tr>
    <tr>
      <th>553</th>
      <td>558</td>
      <td>Pagemaster, The (1994)</td>
      <td>Action|Adventure|Animation|Children|Fantasy</td>
    </tr>
    <tr>
      <th>582</th>
      <td>588</td>
      <td>Aladdin (1992)</td>
      <td>Adventure|Animation|Children|Comedy|Musical</td>
    </tr>
    <tr>
      <th>588</th>
      <td>594</td>
      <td>Snow White and the Seven Dwarfs (1937)</td>
      <td>Animation|Children|Drama|Fantasy|Musical</td>
    </tr>
    <tr>
      <th>589</th>
      <td>595</td>
      <td>Beauty and the Beast (1991)</td>
      <td>Animation|Children|Fantasy|Musical|Romance|IMAX</td>
    </tr>
    <tr>
      <th>590</th>
      <td>596</td>
      <td>Pinocchio (1940)</td>
      <td>Animation|Children|Fantasy|Musical</td>
    </tr>
    <tr>
      <th>604</th>
      <td>610</td>
      <td>Heavy Metal (1981)</td>
      <td>Action|Adventure|Animation|Horror|Sci-Fi</td>
    </tr>
  </tbody>
</table>
</div>




```python
movies[is_animation].head(15)
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>movieId</th>
      <th>title</th>
      <th>genres</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>Toy Story (1995)</td>
      <td>Adventure|Animation|Children|Comedy|Fantasy</td>
    </tr>
    <tr>
      <th>12</th>
      <td>13</td>
      <td>Balto (1995)</td>
      <td>Adventure|Animation|Children</td>
    </tr>
    <tr>
      <th>47</th>
      <td>48</td>
      <td>Pocahontas (1995)</td>
      <td>Animation|Children|Drama|Musical|Romance</td>
    </tr>
    <tr>
      <th>236</th>
      <td>239</td>
      <td>Goofy Movie, A (1995)</td>
      <td>Animation|Children|Comedy|Romance</td>
    </tr>
    <tr>
      <th>241</th>
      <td>244</td>
      <td>Gumby: The Movie (1995)</td>
      <td>Animation|Children</td>
    </tr>
    <tr>
      <th>310</th>
      <td>313</td>
      <td>Swan Princess, The (1994)</td>
      <td>Animation|Children</td>
    </tr>
    <tr>
      <th>360</th>
      <td>364</td>
      <td>Lion King, The (1994)</td>
      <td>Adventure|Animation|Children|Drama|Musical|IMAX</td>
    </tr>
    <tr>
      <th>388</th>
      <td>392</td>
      <td>Secret Adventures of Tom Thumb, The (1993)</td>
      <td>Adventure|Animation</td>
    </tr>
    <tr>
      <th>547</th>
      <td>551</td>
      <td>Nightmare Before Christmas, The (1993)</td>
      <td>Animation|Children|Fantasy|Musical</td>
    </tr>
    <tr>
      <th>553</th>
      <td>558</td>
      <td>Pagemaster, The (1994)</td>
      <td>Action|Adventure|Animation|Children|Fantasy</td>
    </tr>
    <tr>
      <th>582</th>
      <td>588</td>
      <td>Aladdin (1992)</td>
      <td>Adventure|Animation|Children|Comedy|Musical</td>
    </tr>
    <tr>
      <th>588</th>
      <td>594</td>
      <td>Snow White and the Seven Dwarfs (1937)</td>
      <td>Animation|Children|Drama|Fantasy|Musical</td>
    </tr>
    <tr>
      <th>589</th>
      <td>595</td>
      <td>Beauty and the Beast (1991)</td>
      <td>Animation|Children|Fantasy|Musical|Romance|IMAX</td>
    </tr>
    <tr>
      <th>590</th>
      <td>596</td>
      <td>Pinocchio (1940)</td>
      <td>Animation|Children|Fantasy|Musical</td>
    </tr>
    <tr>
      <th>604</th>
      <td>610</td>
      <td>Heavy Metal (1981)</td>
      <td>Action|Adventure|Animation|Horror|Sci-Fi</td>
    </tr>
  </tbody>
</table>
</div>



<h1 style="font-size:2em;color:#2467C0">Group By and Aggregate </h1>


```python
ratings_count = ratings[['movieId','rating']].groupby('rating').count()
ratings_count
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>movieId</th>
    </tr>
    <tr>
      <th>rating</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0.5</th>
      <td>239125</td>
    </tr>
    <tr>
      <th>1.0</th>
      <td>680732</td>
    </tr>
    <tr>
      <th>1.5</th>
      <td>279252</td>
    </tr>
    <tr>
      <th>2.0</th>
      <td>1430997</td>
    </tr>
    <tr>
      <th>2.5</th>
      <td>883398</td>
    </tr>
    <tr>
      <th>3.0</th>
      <td>4291193</td>
    </tr>
    <tr>
      <th>3.5</th>
      <td>2200156</td>
    </tr>
    <tr>
      <th>4.0</th>
      <td>5561926</td>
    </tr>
    <tr>
      <th>4.5</th>
      <td>1534824</td>
    </tr>
    <tr>
      <th>5.0</th>
      <td>2898660</td>
    </tr>
  </tbody>
</table>
</div>




```python
average_rating = ratings[['movieId','rating']].groupby('movieId').mean()
average_rating.head()
```




<div>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>rating</th>
    </tr>
    <tr>
      <th>movieId</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>3.921240</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3.211977</td>
    </tr>
    <tr>
      <th>3</th>
      <td>3.151040</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2.861393</td>
    </tr>
    <tr>
      <th>5</th>
      <td>3.064592</td>
    </tr>
  </tbody>
</table>
</div>




```python
movie_count = ratings[['movieId','rating']].groupby('movieId').count()
movie_count.head()
```


```python
movie_count = ratings[['movieId','rating']].groupby('movieId').count()
movie_count.tail()
```

<h1 style="font-size:2em;color:#2467C0">Merge Dataframes</h1>


```python
tags.head()
```


```python
movies.head()
```


```python
t = movies.merge(tags, on='movieId', how='inner')
t.head()
```

More examples: http://pandas.pydata.org/pandas-docs/stable/merging.html

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>


Combine aggreagation, merging, and filters to get useful analytics
</p>


```python
avg_ratings = ratings.groupby('movieId', as_index=False).mean()
del avg_ratings['userId']
avg_ratings.head()
```


```python
box_office = movies.merge(avg_ratings, on='movieId', how='inner')
box_office.tail()
```


```python
is_highly_rated = box_office['rating'] >= 4.0

box_office[is_highly_rated][-5:]
```


```python
is_comedy = box_office['genres'].str.contains('Comedy')

box_office[is_comedy][:5]
```


```python
box_office[is_comedy & is_highly_rated][-5:]
```

<h1 style="font-size:2em;color:#2467C0">Vectorized String Operations</h1>



```python
movies.head()
```

<p style="font-family: Arial; font-size:1.35em;color:#2462C0; font-style:bold"><br>

Split 'genres' into multiple columns

<br> </p>


```python
movie_genres = movies['genres'].str.split('|', expand=True)
```


```python
movie_genres[:10]
```

<p style="font-family: Arial; font-size:1.35em;color:#2462C0; font-style:bold"><br>

Add a new column for comedy genre flag

<br> </p>


```python
movie_genres['isComedy'] = movies['genres'].str.contains('Comedy')
```


```python
movie_genres[:10]
```

<p style="font-family: Arial; font-size:1.35em;color:#2462C0; font-style:bold"><br>

Extract year from title e.g. (1995)

<br> </p>


```python
movies['year'] = movies['title'].str.extract('.*\((.*)\).*', expand=True)
```


```python
movies.tail()
```

<p style="font-family: Arial; font-size:1.35em;color:#2462C0; font-style:bold"><br>

More here: http://pandas.pydata.org/pandas-docs/stable/text.html#text-string-methods
<br> </p>

<h1 style="font-size:2em;color:#2467C0">Parsing Timestamps</h1>

Timestamps are common in sensor data or other time series datasets.
Let us revisit the *tags.csv* dataset and read the timestamps!



```python
tags = pd.read_csv('./movielens/tags.csv', sep=',')
```


```python
tags.dtypes
```

<p style="font-family: Arial; font-size:1.35em;color:#2462C0; font-style:bold">

Unix time / POSIX time / epoch time records 
time in seconds <br> since midnight Coordinated Universal Time (UTC) of January 1, 1970
</p>


```python
tags.head(5)
```


```python
tags['parsed_time'] = pd.to_datetime(tags['timestamp'], unit='s')
```

<p style="font-family: Arial; font-size:1.35em;color:#2462C0; font-style:bold">

Data Type datetime64[ns] maps to either <M8[ns] or >M8[ns] depending on the hardware

</p>


```python

tags['parsed_time'].dtype
```


```python
tags.head(2)
```

<p style="font-family: Arial; font-size:1.35em;color:#2462C0; font-style:bold">

Selecting rows based on timestamps
</p>


```python
greater_than_t = tags['parsed_time'] > '2015-02-01'

selected_rows = tags[greater_than_t]

tags.shape, selected_rows.shape
```

<p style="font-family: Arial; font-size:1.35em;color:#2462C0; font-style:bold">

Sorting the table using the timestamps
</p>


```python
tags.sort_values(by='parsed_time', ascending=True)[:10]
```

<h1 style="font-size:2em;color:#2467C0">Average Movie Ratings over Time </h1>
## Are Movie ratings related to the year of launch?


```python
average_rating = ratings[['movieId','rating']].groupby('movieId', as_index=False).mean()
average_rating.tail()
```


```python
joined = movies.merge(average_rating, on='movieId', how='inner')
joined.head()
joined.corr()
```


```python
yearly_average = joined[['year','rating']].groupby('year', as_index=False).mean()
yearly_average[:10]
```


```python
yearly_average[-20:].plot(x='year', y='rating', figsize=(15,10), grid=True)
```

<p style="font-family: Arial; font-size:1.35em;color:#2462C0; font-style:bold">

Do some years look better for the boxoffice movies than others? <br><br>

Does any data point seem like an outlier in some sense?

</p>


```python

```

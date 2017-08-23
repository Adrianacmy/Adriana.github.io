---
layout: post
category: data
tags: [data, python,numpy, test]
comments: true
author: Admin

---

<span style="font-family: Arial; font-size:3.75em;color:purple; font-style:bold"><br>
Introduction to numpy:
</span>

<p style="font-family: Arial; font-size:1.25em;color:#2462C0; font-style:bold"><br>
Package for scientific computing with Python
</p>

Numerical Python, or "Numpy" for short, is a foundational package on which many of the most common data science packages are built.  Numpy provides us with high performance multi-dimensional arrays which we can use as vectors or matrices.  

The key features of numpy are:

- ndarrays: n-dimensional arrays of the same data type which are fast and space-efficient.  There are a number of built-in methods for ndarrays which allow for rapid processing of data without using loops (e.g., compute the mean).
- Broadcasting: a useful tool which defines implicit behavior between multi-dimensional arrays of different sizes.
- Vectorization: enables numeric operations on ndarrays.
- Input/Output: simplifies reading and writing of data from/to file.

<b>Additional Recommended Resources:</b><br>
<a href="https://docs.scipy.org/doc/numpy/reference/">Numpy Documentation</a><br>
<i>Python for Data Analysis</i> by Wes McKinney<br>
<i>Python Data science Handbook</i> by Jake VanderPlas



<p style="font-family: Arial; font-size:2.75em;color:purple; font-style:bold"><br>

Getting started with ndarray<br><br></p>

**ndarrays** are time and space-efficient multidimensional arrays at the core of numpy.  Like the data structures in Week 2, let's get started by creating ndarrays using the numpy package.

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

How to create Rank 1 numpy arrays:
</p>


```python
import numpy as np

an_array = np.array([3, 33, 333])  # Create a rank 1 array

print(type(an_array))              # The type of an ndarray is: "<class 'numpy.ndarray'>"
```

    <class 'numpy.ndarray'>



```python
# test the shape of the array we jus`t created, it should have just one dimension (Rank 1)
print(an_array.shape)
```

    (3,)



```python
# because this is a 1-rank array, we need only one index to accesss each element
print(an_array[0], an_array[1], an_array[2]) 
```


```python
an_array[0] = 1000         # ndarrays are mutable, here we change an element of the array

print(an_array)
```

    [1000   33  333]


<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

How to create a Rank 2 numpy array:</p>

A rank 2 **ndarray** is one with two dimensions.  Notice the format below of [ [row] , [row] ].  2 dimensional arrays are great for representing matrices which are often useful in data science.


```python
another = np.array([[11,12,13],[21,22,23]])   # Create a rank 2 array

print(another)  # print the array

print("The shape is 2 rows, 3 columns: ", another.shape)  # rows x columns                   

print("Accessing elements [0,0], [0,1], and [1,0] of the ndarray: ", another[0, 0], ", ",another[0, 1],", ", another[1, 0])
```

    [[11 12 13]
     [21 22 23]]
    The shape is 2 rows, 3 columns:  (2, 3)
    Accessing elements [0,0], [0,1], and [1,0] of the ndarray:  11 ,  12 ,  21


<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

There are many way to create numpy arrays:
</p>

Here we create a number of different size arrays with different shapes and different pre-filled values.  numpy has a number of built in methods which help us quickly and easily create multidimensional arrays.


```python
import numpy as np

# create a 2x2 array of zeros
ex1 = np.zeros((2,2))      
print(ex1)                              
```

    [[ 0.  0.]
     [ 0.  0.]]



```python
# create a 2x2 array filled with 9.0
ex2 = np.full((2,2), 9.0)  
print(ex2)   
```


```python
# create a 2x2 matrix with the diagonal 1s and the others 0
ex3 = np.eye(2,2)
print(ex3)  
```


```python
# create an array of ones
ex4 = np.ones((1,2))
print(ex4)    
```


```python
# notice that the above ndarray (ex4) is actually rank 2, it is a 2x1 array
print(ex4.shape)

# which means we need to use two indexes to access an element
print()
print(ex4[0,1])
```


```python
# create an array of random floats between 0 and 1
ex5 = np.random.random((2,2))
print(ex5)    
```

<p style="font-family: Arial; font-size:2.75em;color:purple; font-style:bold"><br>

Array Indexing
<br><br></p>

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>
Slice indexing:
</p>

Similar to the use of slice indexing with lists and strings, we can use slice indexing to pull out sub-regions of ndarrays.


```python
import numpy as np

# Rank 2 array of shape (3, 4)
an_array = np.array([[11,12,13,14], [21,22,23,24], [31,32,33,34]])
print(an_array)
```

    [[11 12 13 14]
     [21 22 23 24]
     [31 32 33 34]]


Use array slicing to get a subarray consisting of the first 2 rows x 2 columns.


```python
a_slice = an_array[:2, 1:3]
print(a_slice)
```

    [[12 13]
     [22 23]]


When you modify a slice, you actually modify the underlying array.


```python
print("Before:", an_array[0, 1])   #inspect the element at 0, 1  
a_slice[0, 0] = 1000    # a_slice[0, 0] is the same piece of data as an_array[0, 1]
print("After:", an_array[0, 1])    
```

    Before: 12
    After: 1000


<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

Use both integer indexing & slice indexing
</p>

We can use combinations of integer indexing and slice indexing to create different shaped matrices.


```python
# Create a Rank 2 array of shape (3, 4)
an_array = np.array([[11,12,13,14], [21,22,23,24], [31,32,33,34]])
print(an_array)
```


```python
# Using both integer indexing & slicing generates an array of lower rank
row_rank1 = an_array[1, :]    # Rank 1 view 

print(row_rank1, row_rank1.shape)  # notice only a single []
```


```python
# Slicing alone: generates an array of the same rank as the an_array
row_rank2 = an_array[1:2, :]  # Rank 2 view 

print(row_rank2, row_rank2.shape)   # Notice the [[ ]]
```


```python
#We can do the same thing for columns of an array:

print()
col_rank1 = an_array[:, 1]
col_rank2 = an_array[:, 1:2]

print(col_rank1, col_rank1.shape)  # Rank 1
print()
print(col_rank2, col_rank2.shape)  # Rank 2
```

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

Array Indexing for changing elements:
</p>

Sometimes it's useful to use an array of indexes to access or change elements.


```python
# Create a new array
an_array = np.array([[11,12,13], [21,22,23], [31,32,33], [41,42,43]])

print('Original Array:')
print(an_array)
```


```python
# Create an array of indices
col_indices = np.array([0, 1, 2, 0])
print('\nCol indices picked : ', col_indices)

row_indices = np.arange(4)
print('\nRows indices picked : ', row_indices)
```


```python
# Examine the pairings of row_indices and col_indices.  These are the elements we'll change next.
for row,col in zip(row_indices,col_indices):
    print(row, ", ",col)
```


```python
# Select one element from each row
print('Values in the array at those indices: ',an_array[row_indices, col_indices])
```


```python
# Change one element from each row using the indices selected
an_array[row_indices, col_indices] += 100000

print('\nChanged Array:')
print(an_array)
```

<p style="font-family: Arial; font-size:2.75em;color:purple; font-style:bold"><br>
Boolean Indexing

<br><br></p>
<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

Array Indexing for changing elements:
</p>


```python
# create a 3x2 array
an_array = np.array([[11,12], [21, 22], [31, 32]])
print(an_array)
```


```python
# create a filter which will be boolean values for whether each element meets this condition
filter = (an_array > 15)
filter
```

Notice that the filter is a same size ndarray as an_array which is filled with True for each element whose corresponding element in an_array which is greater than 15 and False for those elements whose value is less than 15.


```python
# we can now select just those elements which meet that criteria
print(an_array[filter])
```


```python
# For short, we could have just used the approach below without the need for the separate filter array.

an_array[(an_array % 2 == 0)]
```

What is particularly useful is that we can actually change elements in the array applying a similar logical filter.  Let's add 100 to all the even values.


```python
an_array[an_array % 2 == 0] +=100
print(an_array)
```

<p style="font-family: Arial; font-size:2.75em;color:purple; font-style:bold"><br>

Datatypes and Array Operations
<br><br></p>

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

Datatypes:
</p>


```python
ex1 = np.array([11, 12]) # Python assigns the  data type
print(ex1.dtype)
```


```python
ex2 = np.array([11.0, 12.0]) # Python assigns the  data type
print(ex2.dtype)
```


```python
ex3 = np.array([11, 21], dtype=np.int64) #You can also tell Python the  data type
print(ex3.dtype)
```


```python
# you can use this to force floats into integers (using floor function)
ex4 = np.array([11.1,12.7], dtype=np.int64)
print(ex4.dtype)
print()
print(ex4)
```


```python
# you can use this to force integers into floats if you anticipate
# the values may change to floats later
ex5 = np.array([11, 21], dtype=np.float64)
print(ex5.dtype)
print()
print(ex5)
```

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

Arithmetic Array Operations:

</p>


```python
x = np.array([[111,112],[121,122]], dtype=np.int)
y = np.array([[211.1,212.1],[221.1,222.1]], dtype=np.float64)

print(x)
print()
print(y)
```


```python
# add
print(x + y)         # The plus sign works
print()
print(np.add(x, y))  # so does the numpy function "add"
```


```python
# subtract
print(x - y)
print()
print(np.subtract(x, y))
```


```python
# multiply
print(x * y)
print()
print(np.multiply(x, y))
```


```python
# divide
print(x / y)
print()
print(np.divide(x, y))
```


```python
# square root
print(np.sqrt(x))
```


```python
# exponent (e ** x)
print(np.exp(x))
```

<p style="font-family: Arial; font-size:2.75em;color:purple; font-style:bold"><br>

Statistical Methods, Sorting, and <br> <br> Set Operations:
<br><br>
</p>

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

Basic Statistical Operations:
</p>


```python
# setup a random 2 x 4 matrix
arr = 10 * np.random.randn(2,5)
print(arr)
```


```python
# compute the mean for all elements
print(arr.mean())
```


```python
# compute the means by row
print(arr.mean(axis = 1))
```


```python
# compute the means by column
print(arr.mean(axis = 0))
```


```python
# sum all the elements
print(arr.sum())
```


```python
# compute the medians
print(np.median(arr, axis = 1))
```

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

Sorting:
</p>



```python
# create a 10 element array of randoms
unsorted = np.random.randn(10)

print(unsorted)
```


```python
# create copy and sort
sorted = np.array(unsorted)
sorted.sort()

print(sorted)
print()
print(unsorted)
```


```python
# inplace sorting
unsorted.sort() 

print(unsorted)
```

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

Finding Unique elements:
</p>


```python
array = np.array([1,2,1,4,2,1,4,2])

print(np.unique(array))
```

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

Set Operations with np.array data type:
</p>


```python
s1 = np.array(['desk','chair','bulb'])
s2 = np.array(['lamp','bulb','chair'])
print(s1, s2)
```


```python
print( np.intersect1d(s1, s2) ) 
```


```python
print( np.union1d(s1, s2) )
```


```python
print( np.setdiff1d(s1, s2) )# elements in s1 that are not in s2
```


```python
print( np.in1d(s1, s2) )#which element of s1 is also in s2
```

<p style="font-family: Arial; font-size:2.75em;color:purple; font-style:bold"><br>

Broadcasting:
<br><br>
</p>

Introduction to broadcasting. <br>
For more details, please see: <br>
https://docs.scipy.org/doc/numpy-1.10.1/user/basics.broadcasting.html


```python
import numpy as np

start = np.zeros((4,3))
print(start)
```

    [[ 0.  0.  0.]
     [ 0.  0.  0.]
     [ 0.  0.  0.]
     [ 0.  0.  0.]]



```python
# create a rank 1 ndarray with 3 values
add_rows = np.array([1, 0, 2])
print(add_rows)
```

    [1 0 2]



```python
y = start + add_rows  # add to each row of 'start' using broadcasting
print(y)
```

    [[ 1.  0.  2.]
     [ 1.  0.  2.]
     [ 1.  0.  2.]
     [ 1.  0.  2.]]



```python
# create an ndarray which is 4 x 1 to broadcast across columns
add_cols = np.array([[0,1,2,3]])
add_cols = add_cols.T

print(add_cols)
```

    [[0]
     [1]
     [2]
     [3]]



```python
# add to each column of 'start' using broadcasting
y = start + add_cols 
print(y)
```

    [[ 0.  0.  0.]
     [ 1.  1.  1.]
     [ 2.  2.  2.]
     [ 3.  3.  3.]]



```python
# this will just broadcast in both dimensions
add_scalar = np.array([1])  
print(start+add_scalar)
```

    [[ 1.  1.  1.]
     [ 1.  1.  1.]
     [ 1.  1.  1.]
     [ 1.  1.  1.]]


Example from the slides:


```python
# create our 3x4 matrix
arrA = np.array([[1,2,3,4],[5,6,7,8],[9,10,11,12]])
print(arrA)
```

    [[ 1  2  3  4]
     [ 5  6  7  8]
     [ 9 10 11 12]]



```python
# create our 4x1 array
arrB = [0,1,0,2]
print(arrB)
```

    [0, 1, 0, 2]



```python
# add the two together using broadcasting
print(arrA + arrB)
```

    [[ 1  3  3  6]
     [ 5  7  7 10]
     [ 9 11 11 14]]


<p style="font-family: Arial; font-size:2.75em;color:purple; font-style:bold"><br>

Speedtest: ndarrays vs lists
<br><br>
</p>

First setup paramaters for the speed test. We'll be testing time to sum elements in an ndarray versus a list.


```python
from numpy import arange
from timeit import Timer

size    = 1000000
timeits = 1000
```


```python
# create the ndarray with values 0,1,2...,size-1
nd_array = arange(size)
print( type(nd_array) )
```


```python
# timer expects the operation as a parameter, 
# here we pass nd_array.sum()
timer_numpy = Timer("nd_array.sum()", "from __main__ import nd_array")

print("Time taken by numpy ndarray: %f seconds" % 
      (timer_numpy.timeit(timeits)/timeits))
```


```python
# create the list with values 0,1,2...,size-1
a_list = list(range(size))
print (type(a_list) )
```


```python
# timer expects the operation as a parameter, here we pass sum(a_list)
timer_list = Timer("sum(a_list)", "from __main__ import a_list")

print("Time taken by list:  %f seconds" % 
      (timer_list.timeit(timeits)/timeits))
```

<p style="font-family: Arial; font-size:2.75em;color:purple; font-style:bold"><br>

Read or Write to Disk:
<br><br>
</p>

<p style="font-family: Arial; font-size:1.3em;color:#2462C0; font-style:bold"><br>

Binary Format:</p>


```python
x = np.array([ 23.23, 24.24] )
```


```python
np.save('an_array', x)
```


```python
np.load('an_array.npy')
```

<p style="font-family: Arial; font-size:1.3em;color:#2462C0; font-style:bold"><br>

Text Format:</p>


```python
np.savetxt('array.txt', X=x, delimiter=',')
```


```python
!cat array.txt
```


```python
np.loadtxt('array.txt', delimiter=',')
```

<p style="font-family: Arial; font-size:2.75em;color:purple; font-style:bold"><br>

Additional Common ndarray Operations
<br><br></p>

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

Dot Product on Matrices and Inner Product on Vectors:

</p>


```python
# determine the dot product of two matrices
x2d = np.array([[1,1],[1,1]])
y2d = np.array([[2,2],[2,2]])

print(x2d.dot(y2d))
print()
print(np.dot(x2d, y2d))
```


```python
# determine the inner product of two vectors
a1d = np.array([9 , 9 ])
b1d = np.array([10, 10])

print(a1d.dot(b1d))
print()
print(np.dot(a1d, b1d))
```


```python
# dot produce on an array and vector
print(x2d.dot(a1d))
print()
print(np.dot(x2d, a1d))
```

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

Sum:
</p>


```python
# sum elements in the array
ex1 = np.array([[11,12],[21,22]])

print(np.sum(ex1))          # add all members
```


```python
print(np.sum(ex1, axis=0))  # columnwise sum
```


```python
print(np.sum(ex1, axis=1))  # rowwise sum
```

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

Element-wise Functions: </p>

For example, let's compare two arrays values to get the maximum of each.


```python
# random array
x = np.random.randn(8)
x
```


```python
# another random array
y = np.random.randn(8)
y
```


```python
# returns element wise maximum between two arrays

np.maximum(x, y)
```

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

Reshaping array:
</p>


```python
# grab values from 0 through 19 in an array
arr = np.arange(20)
print(arr)
```


```python
# reshape to be a 4 x 5 matrix
arr.reshape(4,5)
```

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

Transpose:

</p>


```python
# transpose
ex1 = np.array([[11,12],[21,22]])

ex1.T
```

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

Indexing using where():</p>


```python
x_1 = np.array([1,2,3,4,5])

y_1 = np.array([11,22,33,44,55])

filter = np.array([True, False, True, False, True])
```


```python
out = np.where(filter, x_1, y_1)
print(out)
```


```python
mat = np.random.rand(5,5)
mat
```


```python
np.where( mat > 0.5, 1000, -1)
```

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

"any" or "all" conditionals:</p>


```python
arr_bools = np.array([ True, False, True, True, False ])
```


```python
arr_bools.any()
```


```python
arr_bools.all()
```

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

Random Number Generation:
</p>


```python
Y = np.random.normal(size = (1,5))[0]
print(Y)
```


```python
Z = np.random.randint(low=2,high=50,size=4)
print(Z)
```


```python
np.random.permutation(Z) #return a new ordering of elements in Z
```


```python
np.random.uniform(size=4) #uniform distribution
```


```python
np.random.normal(size=4) #normal distribution
```

<p style="font-family: Arial; font-size:1.75em;color:#2462C0; font-style:bold"><br>

Merging data sets:
</p>


```python
K = np.random.randint(low=2,high=50,size=(2,2))
print(K)

print()
M = np.random.randint(low=2,high=50,size=(2,2))
print(M)
```


```python
np.vstack((K,M))
```


```python
np.hstack((K,M))
```


```python
np.concatenate([K, M], axis = 0)
```


```python
np.concatenate([K, M.T], axis = 1)
```


    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    <ipython-input-1-3b0ba6f6da47> in <module>()
    ----> 1 np.concatenate([K, M.T], axis = 1)
    

    NameError: name 'np' is not defined



```python

```

## Source for venusgrape.com

### Create A New Project

#### New projects should be added to projects.yml in __data folder as below:

```
- title: "Flask Blog"
  folder: projects
  link: "https://pure-wave-56142.herokuapp.com/"
  img: "project-blogz.png"
  source: "https://github.com/adrianacmy/blogz"
  key-words: "Python, Flask, Sqlalchemy"
```


### Create A New Education Item

#### New education should be added to education.yml in __data folder as below:

```
 - title: "Introduction To Probability"
    link: "https://www.class-central.com/mooc/1496/edx-introduction-to-probability-the-science-of-uncertainty"
    img: "course-possibility-edx.png"
    Status: "20"
```


### Create A New Post

#### New posts should be added in the _posts folder with below front matters:

```
layout: post
category: data
tags: [data, python,pandas, test]
comments: true
author: Admin

```


### Run Locally
```
$ bundle exec jekyll serve
```
### Updating
```
$ bundle update
```
### Credits
##### Js credits on this site go to below libs' authors:
- [jquery](https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js)
- [bootstrap](https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.3/js/bootstrap.min.js)
- [superfish](https://cdnjs.cloudflare.com/ajax/libs/superfish/1.7.4/superfish.min.js)
- [morphext](https://cdnjs.cloudflare.com/ajax/libs/Morphext/2.4.4/morphext.min.js)
- [wow](https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js)
- [sticky](https://cdnjs.cloudflare.com/ajax/libs/jquery.sticky/1.0.4/jquery.sticky.min.js)
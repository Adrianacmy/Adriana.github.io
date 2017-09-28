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
$ bundle exec jekyll serve --drafts # Serve articles in drafts folder
```
### Updating
```
$ bundle update
```

# Source for adrianawritescode.com

## Description

- Portfolio with Jekyll and gh-pages

## Setup/Installation Requirements

- Please check [Jekyll Docs](https://jekyllrb.com/docs/installation/) for installation instructions 

### Run Locally

```sh

bundle exec jekyll serve

```

### Updating

```sh

bundle update

```

## Create A New Project

### New projects should be added to projects.yml in __data folder as below:

```sh

- title: "Flask Blog"
  folder: projects
  link: "https://pure-wave-56142.herokuapp.com/"
  img: "project-blogz.png"
  source: "https://github.com/adrianacmy/blogz"
  key-words: "Python, Flask, Sqlalchemy"

```

### Create A New Post

#### New posts should be added in the _posts folder with below front matters:

```sh

layout: post
category: data
tags: [data, python,pandas, test]
comments: true
author: Admin

```

## Kown bugs

- None

## Technologies Used

- Jekyll
- jh-pages
- html
- materializecss
- CSS
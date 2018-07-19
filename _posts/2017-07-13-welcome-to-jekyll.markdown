---
layout: post
title:  "Welcome to Jekyll!"
date:   2017-07-13 15:43:01 -0700
categories: jekyll
tags: [welcome]
comments: true
author: Admin
---

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

{% highlight python %}
def add(a, b):
  return a + b


  # Creates Argument Parser object named parser
  parser = argparse.ArgumentParser()

  # Argument 1: that's a path to a folder
  parser.add_argument('--dir', type = str, default = 'my_folder/', 
                      help = 'path to the folder my_folder') 

  # Argument 2: that's an integer
  parser.add_argument('--num', type = int, default = 1, 
                      help = 'Number (integer) input')

  # Assigns variable in_args to parse_args()
  in_args = parser.parse_args()

  # Accesses values of Arguments 1 and 2 by printing them
  print("Argument 1:", in_args.dir, "  Argument 2:", in_args.num)

{% endhighlight %}

{% highlight sql %}

  SELECT * 
    FROM orders 
    LIMIT 15;

  SELECT id            AS id,
        occurred_at   AS occurredAt,
        total_amt_usd AS totalAmtUsd
    FROM orders 
  LIMIT 10;
  
  SELECT id, account_id, total_amt_usd
  FROM orders
  ORDER BY total_amt_usd DESC 
  LIMIT 5;

  SELECT id         AS id,
        account_id AS accountId,
        total      AS total
    FROM orders 
  ORDER BY total DESC 
  LIMIT 20

  SELECT name, website, primary_poc SELECT name, website, primary_poc 
  FROM accounts
  WHERE name = 'Exxon Mobil';
  FROM accounts
  WHERE name = 'Exxon Mobil';

{% endhighlight %}


Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you estions, youestions, youestions, youestions, you   Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/

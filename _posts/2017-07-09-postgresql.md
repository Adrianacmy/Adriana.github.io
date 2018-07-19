---

layout: post
title:  "Postgresql Revisit part-one"
date:   2017-07-13 15:43:01 -0700
categories: sql
tags: [welcome]
comments: true
author: Admin

---

ERD: entity relationship diagram mentioned in this post

![diagram]({{site.baseurl}}/static/images/tables.png)

Basic select

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

  SELECT name, website, primary_poc 
  FROM accounts
  WHERE name = 'Exxon Mobil';

{% endhighlight %}

Derived column

{% highlight sql %}

  SELECT id, account_id, 
        poster_amt_usd/(standard_amt_usd + gloss_amt_usd + poster_amt_usd) AS post_per
  FROM orders;

{% endhighlight %}


Logic operator: LIKE, IN, NOT, AND&BETWEEN, OR

{% highlight sql %}

<!-- select all names starts with C -->
  SELECT * FROM accounts
  WHERE name LIKE 'C%';

{% endhighlight %}

Select all names ends with s

{% highlight sql %}

  SELECT name
  FROM accounts
  WHERE name LIKE '%s';

  SELECT name, primary_poc, sales_rep_id
  FROM accounts
  WHERE name IN('Walmart', 'Target', 'Nordstrom');

  SELECT name, primary_poc, sales_rep_id
  FROM accounts
  WHERE name NOT IN('Walmart', 'Target', 'Nordstrom');

  SELECT * 
  FROM accounts
  WHERE name NOT LIKE 'C%';

  SELECT * 
  FROM accounts
  WHERE name NOT LIKE '%one%';

  SELECT * 
  FROM accounts
  WHERE name NOT LIKE '%s';

  SELECT * 
  FROM orders
  WHERE standard_qty > 1000 AND poster_qty = 0 AND gloss_qty = 0;

  SELECT * 
  FROM accounts
  WHERE name NOT LIKE 'C%' AND name NOT LIKE '%s';


  SELECT *
  FROM web_events
  WHERE channel IN ('organic', 'adwords') AND occurred_at BETWEEN '2016-01-01' AND '2017-01-01'
  ORDER BY occurred_at DESC;


  SELECT id 
  FROM orders
  WHERE gloss_qty > 4000 OR poster_qty > 4000;

{% endhighlight %}


Write a query that returns a list of orders where the standard_qty is zero and 
either the gloss_qty or poster_qty is over 1000.

{% highlight sql %}

  SELECT id 
  FROM orders
  WHERE standard_qty = 0 
  AND (gloss_qty > 1000 OR poster_qty > 1000);

{% endhighlight %}


Find all the company names that start with a 'C' or 'W', and the primary contact 
contains 'ana' or 'Ana', but it doesn't contain 'eana'.

{% highlight sql %}

  SELECT *
  FROM accounts
  WHERE (name LIKE 'C%' OR name LIKE 'W%') 
            AND ((primary_poc LIKE '%ana%' OR primary_poc LIKE '%Ana%') 
                  AND primary_poc NOT LIKE '%eana%');

 {% endhighlight %}


Derived column

{% highlight sql %}

  SELECT id, account_id, 
        poster_amt_usd/(standard_amt_usd + gloss_amt_usd + poster_amt_usd) AS post_per
  FROM orders;

{% endhighlight %}

---
layout: post
category: data
tags: [data, python,numpy, test]
comments: true
author: Admin

---

![img]({{site.baseurl}}/static/images/blur3.jpg)


## Recently revisited raw sql, 

## Terminology

- ERD: entity relationship diagram mentioned in this post

![diagram](./imgs/tables.png)

~~~sql
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

~~~

## Derived column

```sql
SELECT id, account_id, 
       poster_amt_usd/(standard_amt_usd + gloss_amt_usd + poster_amt_usd) AS post_per
FROM orders;

``` 
---

layout: post
title:  "CheatSheet-Postgresql"
date:   2018-07-13 15:43:01 -0700
categories: sql
tags: [sql]
comments: true
author: Adriana

---




Installation

```
sudo apt update
sudo apt install postgresql postgresql-contrib

```
Switch over to the postgres account on your server `sudo -i -u postgres`

Access a Postgres prompt `psql` <br>

Combine above two into one command `sudo -u postgres psql`<br>

Exit out of the PostgreSQL prompt `\q`<br>

Create a new user  `sudo -u postgres createuser --interactive`  or  `createuser --interactive` If you are logged in as the postgres account<br>

Create a database  `sudo -u postgres createdb dbname`  or  `createdb dbname` if you are logged in as the postgres account<br>

Connect to a database postgres `-d postgres`<br>

Once logged in, check current connection info `\conninfo`<br>

To see the table `\d`<br>

To see the table definition `\dt`<br>

Insert a row `INSERT INTO tablename (col1, col2) VALUES (value1, value2)`<br>

Delete a row `DELETE FROM tablename WHERE colname=value`<br>

Add a column `ALTER TABLE tablename ADD col3 datatype`<br>

Drop a column `ALTER TABLE tablename DROP col3`<br>

Rename a column `ALTER TABLE tablename RENAME col3 TO col4`<br>

Update a table `UPDATE tablename SET col4='pink' WHERE 'type=swing'`<br>

Delete a table `DROP TABLE tablename`<br>

Delete all rows from a table [**DANGER**] `DELETE FROM tablename`<br>

Create a table
```sql
CREATE TABLE weather (
    city            varchar(80),
    temp_lo         int,           -- low temperature
    temp_hi         int,           -- high temperature
    prcp            real,          -- precipitation
    date            date
);

```

Create a view
```sql
CREATE VIEW myview AS
    SELECT city, temp_lo, temp_hi, prcp, date, location
        FROM weather, cities
        WHERE city = name;

```

Transaction
```sql
BEGIN;
UPDATE accounts SET balance = balance - 100.00
    WHERE name = 'Alice';
SAVEPOINT my_savepoint;
UPDATE accounts SET balance = balance + 100.00
    WHERE name = 'Bob';
-- oops ... forget that and use Wally's account
ROLLBACK TO my_savepoint;
UPDATE accounts SET balance = balance + 100.00
    WHERE name = 'Wally';
COMMIT;

```

Inheritance
```sql

CREATE TABLE cities (
    name       text,
    population real,
    altitude   int     -- (in ft)
    );

CREATE TABLE capitals (
    state      char(2)
    ) INHERITS (cities);

```



ERD: entity relationship diagram mentioned below

![diagram]({{site.baseurl}}/static/images/tables.png)

Select

```sql
SELECT id         AS id,
       account_id AS accountId,
       total      AS total
FROM orders
ORDER BY total DESC
LIMIT 20
```

LIKE, IN, NOT, AND&BETWEEN, OR

```sql

-- select all names starts with C
SELECT *
FROM accounts
WHERE name LIKE 'C%';

-- select all names ends with s
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
WHERE name NOT LIKE '%one%';

SELECT *
FROM web_events
WHERE channel IN ('organic', 'adwords') AND occurred_at BETWEEN '2016-01-01' AND '2017-01-01'
ORDER BY occurred_at DESC;


SELECT id
FROM orders
WHERE gloss_qty > 4000 OR poster_qty > 4000;


```

Join
```sql
-- alias for columns
Select t1.column1 aliasname, t2.column2 aliasname2
FROM tablename AS t1
JOIN tablename2 AS t2

-- Provide the name for each region for every order, as well as the account name and the unit price they paid (total_amt_usd/total) for the order. Your final table should have 3 columns: region name, account name, and unit price. A few accounts have 0 for total, so I divided by (total + 0.01) to assure not dividing by zero.

SELECT r.name region, a.name account,
       o.total_amt_usd/(o.total + 0.01) unit_price
FROM region r
JOIN sales_reps s
ON s.region_id = r.id
JOIN accounts a
ON a.sales_rep_id = s.id
JOIN orders o
ON o.account_id = a.id;


SELECT o.occurred_at, a.name, o.total, o.total_amt_usd
FROM accounts a
JOIN orders o
ON o.account_id = a.id
WHERE o.occurred_at BETWEEN '01-01-2015' AND '01-01-2016'
ORDER BY o.occurred_at DESC;



```

Aggregation <br>

Aggregators only aggregate vertically - the values of a column. If you want to perform a calculation across rows, you would do this with simple arithmetic.<br>

Null: no data <br>

COUNT: In default, count function will count all none null data <br>

SUM: only works on numeric columns, and it will ignore null values <br>

Any column in the SELECT statement that is not within an aggregator must be in the GROUP BY clause.<br>


```sql
-- Determine the number of times a particular channel was used in the web_events table for each region. Your final table should have three columns - the region name, the channel, and the number of occurrences. Order your table with the highest number of occurrences first.

SELECT r.name, w.channel, COUNT(*) num_events
FROM accounts a
JOIN web_events w
ON a.id = w.account_id
JOIN sales_reps s
ON s.id = a.sales_rep_id
JOIN region r
ON r.id = s.region_id
GROUP BY r.name, w.channel
ORDER BY num_events DESC;

```

HAVING is the “clean” way to filter a query that has been aggregated, but this is also commonly done using a subquery. Essentially, any time you want to perform a WHERE on an element of your query that was created by an aggregate, you need to use HAVING instead.<br>

HAVING appears after the GROUP BY, but before the ORDER BY clause<br>

WHERE appears after the FROM, JOIN and ON clause, but before GROUP BY clause<br>


```sql
-- Which accounts used facebook as a channel to contact customers more than 6 times?
SELECT a.id, a.name, w.channel, COUNT(w.channel) fb_count
FROM accounts a
JOIN web_events w
ON a.id = w.account_id
GROUP BY a.name, a.id, w.channel
HAVING COUNT(w.channel) > 6 AND w.channel = 'facebook'


```


DATE_TRUNC(): <br>

```sql
-- In which month of which year did Walmart spend the most on gloss paper in terms of dollars?

SELECT DATE_TRUNC('month', o.occurred_at) order_date, SUM(o.gloss_amt_usd) total_gloss_spend
FROM accounts a
JOIN orders o
ON a.id = o.account_id
WHERE a.name = 'Walmart'
GROUP BY 1
ORDER BY 2 DESC
LIMIT 1;

```

CASE statement<br>

The CASE statement always goes in the SELECT clause.<br>

CASE must include the following components: WHEN, THEN, and END. ELSE is an optional component to catch cases that didn’t meet any of the other previous CASE conditions.<br>

You can make any conditional statement using any conditional operator (like WHERE) between WHEN and THEN. This includes stringing together multiple conditional statements using AND and OR.<br>

```sql
SELECT s.name, COUNT(*), SUM(o.total_amt_usd) total_spent,
     CASE WHEN COUNT(*) > 200 OR SUM(o.total_amt_usd) > 750000 THEN 'top'
     WHEN COUNT(*) > 150 OR SUM(o.total_amt_usd) > 500000 THEN 'middle'
     ELSE 'low' END AS sales_rep_level
FROM orders o
JOIN accounts a
ON o.account_id = a.id
JOIN sales_reps s
ON s.id = a.sales_rep_id
GROUP BY s.name
ORDER BY 3 DESC;
```

Subqueries




```sql
-- For the customer that spent the most (in total over their lifetime as a customer) total_amt_usd, how many web_events did they have for each channel?
SELECT a.name, w.channel, COUNT(*)
FROM accounts a
JOIN web_events w
ON a.id = w.account_id AND a.id =  (SELECT id
                     FROM (SELECT a.id, a.name, SUM(o.total_amt_usd) tot_spent
                           FROM orders o
                           JOIN accounts a
                           ON a.id = o.account_id
                           GROUP BY a.id, a.name
                           ORDER BY 3 DESC
                           LIMIT 1) inner_table)
GROUP BY 1, 2
ORDER BY 3 DESC;

-- refactor with WITH
WITH t1 AS (SELECT a.id, a.name, SUM(o.total_amt_usd) tot_spent
                           FROM orders o
                           JOIN accounts a
                           ON a.id = o.account_id
                           GROUP BY a.id, a.name
                           ORDER BY 3 DESC
                           LIMIT 1)
SELECT a.name, w.channel, COUNT(*)
FROM accounts a
JOIN web_events w
ON a.id = w.account_id AND a.id =  (SELECT id
                     FROM t1)
GROUP BY 1, 2
ORDER BY 3 DESC;
```

With statement
```sql
WITH events AS (SELECT DATE_TRUNC('day', occurred_at) AS day,
  channel,
  count(*) AS event_count
  FROM web_events
  GROUP BY 1,2)

SELECT channel,
  AVG(event_count) AS avg_event_count
  FROM events
  GROUP BY 1
  ORDER BY 2 DESC


-- example 2
  WITH table1 AS (
          SELECT *
          FROM web_events),

     table2 AS (
          SELECT *
          FROM accounts)

SELECT *
FROM table1
JOIN table2
ON table1.account_id = table2.id;

```

import React, { Component } from 'react';

import ReactMarkdown from 'react-markdown';


import Navbar from './navbar';
import NameTag from './nametag';
import Footer from './footer';
import Slider from './slider';



class PostsDetailsFake extends Component {

  render() {
    const content =`
    SELECT * FROM accounts
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



-- Write a query that returns a list of orders where the standard_qty is zero and either the gloss_qty or poster_qty is over 1000.

SELECT id 
FROM orders
WHERE standard_qty = 0 
AND (gloss_qty > 1000 OR poster_qty > 1000);


-- Find all the company names that start with a 'C' or 'W', and the primary contact contains 'ana' or 'Ana', but it doesn't contain 'eana'.
SELECT *
FROM accounts
WHERE (name LIKE 'C%' OR name LIKE 'W%') 
           AND ((primary_poc LIKE '%ana%' OR primary_poc LIKE '%Ana%') 
                 AND primary_poc NOT LIKE '%eana%');




SELECT region.name AS regionName, sales_reps.name AS repName, accounts.name AS accountsName
FROM region
JOIN sales_reps
ON region.id = sales_reps.region_id
JOIN accounts
ON sales_reps.id = accounts.sales_rep_id

SELECT r.name region, s.name rep, a.name account
FROM sales_reps s
JOIN region r
ON s.region_id = r.id
JOIN accounts a
ON a.sales_rep_id = s.id
WHERE r.name = 'Midwest' AND s.name LIKE 'S%'
ORDER BY a.name;


SELECT region.name AS regionName, sales_reps.name AS repName, accounts.name AS accountsName
FROM region
JOIN sales_reps
ON region.id = sales_reps.region_id

JOIN accounts
ON sales_reps.id = accounts.sales_rep_id
WHERE sales_reps.name LIKE '% K%' AND region.name = 'Midwest'
ORDER BY sales_reps.name ASC


5
SELECT r.name region, a.name account, 
       o.total_amt_usd/(o.total + 0.01) unit_price
FROM region r
JOIN sales_reps s
ON s.region_id = r.id
JOIN accounts a
ON a.sales_rep_id = s.id
JOIN orders o
ON o.account_id = a.id
WHERE o.standard_qty > 100 AND poster_qty > 50
ORDER BY unit_price ASC;


7
SELECT a.name accountName, w.channel channel
FROM accounts a
JOIN web_events w
ON a.id = w.account_id
AND w.account_id = '1001'
  
SELECT o.occurred_at, a.name, o.total, o.total_amt_usd
FROM accounts a
JOIN orders o
ON o.account_id = a.id
WHERE o.occurred_at BETWEEN '01-01-2015' AND '01-01-2016'
ORDER BY o.occurred_at DESC;

`

    return (
      <div>
        <Navbar />
        <NameTag />
        <Slider />
        <div className="container">
          <h4>Pretty Title</h4>
          <p><i>By author on post time</i></p>
          <ReactMarkdown source={content} />
        </div>
        <Footer />
      </div>
    );
  }

}

export default PostsDetailsFake;
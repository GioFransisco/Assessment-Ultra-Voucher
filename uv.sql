-- I use PostgresQL to run the query

-- query to create table :
CREATE TABLE name (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100),
	parent_id INTEGER,
	FOREIGN KEY (parent_id) REFERENCES name(id)
)

-- this is my query to solved the query test :
SELECT nn.id, nn.name, n.name AS parent_name 
FROM name AS n RIGHT JOIN name AS nn ON nn.parent_id = n.id ORDER BY nn.id
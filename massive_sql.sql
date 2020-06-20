DROP DATABASE IF EXISTS social_db;
CREATE DATABASE social_db;
USE social_db;

CREATE TABLE users (
id INT AUTO_INCREMENT,
user_name VARCHAR (30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE posts (
id INT AUTO_INCREMENT,
author INT NOT NULL,
post_text VARCHAR (300) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO users (user_name)
VALUES ("geekcentric");

INSERT INTO users (user_name)
VALUES ("ts202282");

INSERT INTO users (user_name)
VALUES ("jmonkey");

INSERT INTO users (user_name)
VALUES ("nuggetpmenius");

SELECT * FROM users;

UPDATE users
SET user_name = "jmonkey1283"
WHERE id = 3;

INSERT INTO posts (author, post_text)
VALUES (1, "this is from geekcentric");

INSERT INTO posts (author, post_text)
VALUES (1, "this is also from geekcentric");

SELECT * FROM posts;
SELECT * FROM posts WHERE author = 1;

-- join matching tables
SELECT *
FROM users
INNER JOIN posts ON users.id = posts.author;

SELECT user_name,post_text
FROM users INNER JOIN posts
ON users.id = posts.author;

SELECT user_name,post_text
FROM users LEFT JOIN posts
ON users.id = posts.author;

SELECT user_name,post_text
FROM users RIGHT JOIN posts
ON users.id = posts.author;

-- experimentation and expectation
SELECT user_name, post_text
FROM posts LEFT JOIN users
ON users.id = posts.author;
DROP DATABASE IF EXISTS ebay;

CREATE DATABASE ebay;

USE ebay;

CREATE TABLE products (
  id int primary key not null auto_increment,
  item varchar(255) not null,
  min_cost int not null,
  curr_bid int not null,
  ends_in int not null,
  image varchar(255) not null
);

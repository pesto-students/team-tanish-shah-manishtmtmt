CREATE DATABASE WAREHOUSE;
USE WAREHOUSE;

-- Create CITIES Table
CREATE TABLE CITIES (
	CITY CHAR(20) PRIMARY KEY,
  STATE CHAR(20)
);

-- Create WAREHOUSES Table
CREATE TABLE WAREHOUSES (
	WID INT PRIMARY KEY,
  WNAME CHAR(30),
  LOCATION CHAR(20),
  EXTRA_CONTEXT JSON,
  CITY CHAR(20),
  FOREIGN KEY (CITY) REFERENCES CITIES(CITY)
);

-- Create STORES Table
CREATE TABLE STORES (
	SID INT PRIMARY KEY,
  STORE_NAME CHAR(20),
  LOCATION_CITY CHAR(20),
  WAREHOUSE_ID INT,
  FOREIGN KEY (WAREHOUSE_ID) REFERENCES WAREHOUSES(WID)
);

-- Create CUSTOMER Table
CREATE TABLE CUSTOMER (
	CNO INT PRIMARY KEY,
  CNAME CHAR(50),
  ADDR VARCHAR(50),
  CU_CITY CHAR(20),
  FOREIGN KEY (CU_CITY) REFERENCES CITIES(CITY)
);

-- Create ORDERS Table
CREATE TABLE ORDERS (
	ONO INT PRIMARY KEY,
  ODATE DATE,
  CUSTOMER_ID INT,
  FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMER(CNO)
);

-- Create ITEMS Table
CREATE TABLE ITEMS (
	ITEMNO INT,
  DESCRIPTION TEXT,
  WEIGHT DECIMAL(5,2),
  COST DECIMAL(5,2)
);

ALTER TABLE ITEMS
	ADD PRIMARY KEY (ITEMNO);

-- Create ORDER_ITEMS table for the M:M relationship with ordered_quantity
CREATE TABLE ORDER_ITEMS (
  ONO INT,
  ITEMNO INT,
  ORDERED_QUANTITY INT,
  PRIMARY KEY (ONO, ITEMNO),
  FOREIGN KEY (ONO) REFERENCES ORDERS(ONO),
  FOREIGN KEY (ITEMNO) REFERENCES ITEMS(ITEMNO)
);
    
-- Create the STORE_ITEMS table to represent the M:M relationship between STORES and ITEMS
CREATE TABLE STORE_ITEMS (
  SID INTEGER,
  ITEMNO INTEGER,
  QUANTITY INT,
  FOREIGN KEY (SID) REFERENCES STORES(SID),
  FOREIGN KEY (ITEMNO) REFERENCES ITEMS(ITEMNO),
  PRIMARY KEY (SID, ITEMNO)
);

-- Insert sample data into the CITIES table
INSERT INTO CITIES (CITY, STATE) VALUES
	('PUNE', 'MAHARASHTRA'),
  ('MUMBAI', 'MAHARASHTRA'),
  ('DELHI', 'DELHI'),
  ('BANGALORE', 'KARNATAKA'),
  ('CHENNAI', 'TAMIL NADU');

SELECT * FROM CITIES;

-- Insert sample data into the WAREHOUSES table
INSERT INTO WAREHOUSES (WID, WNAME, LOCATION, EXTRA_CONTEXT, CITY) VALUES
	(1, 'Warehouse A', 'PUNE', '{"capacity": 1000}', 'PUNE'),
  (2, 'Warehouse B', 'MUMBAI', '{"capacity": 800}', 'MUMBAI'),
  (3, 'Warehouse C', 'DELHI', '{"capacity": 1200}', 'DELHI'),
  (4, 'Warehouse D', 'BANGALORE', '{"capacity": 900}', 'BANGALORE');

SELECT * FROM WAREHOUSES;

-- Insert sample data into the STORES table
INSERT INTO STORES (SID, STORE_NAME, LOCATION_CITY, WAREHOUSE_ID) VALUES 
	(1, 'Store 1', 'PUNE', 1),
  (2, 'Store 2', 'MUMBAI', 2),
  (3, 'Store 3', 'PUNE', 1),
  (4, 'Store 4', 'DELHI', 3);
    
SELECT * FROM STORES;

-- Insert sample data into CUSTOMER table
INSERT INTO CUSTOMER (CNO, CNAME, ADDR, CU_CITY) VALUES 
	(101, 'Mr. Patil', '123 Main St', 'PUNE'),
  (102, 'Mrs Sharma', '456 Central Ave', 'MUMBAI'),
  (103, 'Mr. Singh', '789 1st Street', 'DELHI'),
  (104, 'Ms. Gupta', '101 Second Road', 'BANGALORE'),
  (105, 'Mr. Kumar', '456 Third Avenue', 'CHENNAI');

SELECT * FROM CUSTOMER;

-- Insert sample data into ORDERS table
INSERT INTO ORDERS (ONO, ODATE, CUSTOMER_ID) VALUES 
	(1, '2023-06-15', 101),
  (2, '2023-06-16', 102),
  (3, '2023-06-17', 103),
  (4, '2023-06-18', 104),
  (5, '2023-06-19', 105);
    
SELECT * FROM ORDERS;

-- Insert sample data into ITEMS table
INSERT INTO ITEMS (ITEMNO, DESCRIPTION, WEIGHT, COST) VALUES
  (101, 'Laptop', 2.5, 1200.50),
  (102, 'Smartphone', 0.5, 800.00),
  (103, 'TV', 15.0, 1000.00),
  (104, 'Microwave Oven', 10.0, 500.00),
  (105, 'Refrigerator', 25.0, 1500.00),
  (106, 'Washing Machine', 30.0, 1800.00);

SELECT * FROM ITEMS;

-- Insert sample data into the ORDER_ITEMS table
INSERT INTO ORDER_ITEMS (ONO, ITEMNO, ORDERED_QUANTITY) VALUES
  (1, 101, 3), -- Order 1: 3 Laptops
  (2, 102, 2), -- Order 2: 2 Smartphones
  (2, 103, 1), -- Order 2: 1 TV
  (3, 104, 2), -- Order 3: 2 Microwave Ovens
  (4, 105, 1), -- Order 4: 1 Refrigerator
  (5, 106, 1); -- Order 5: 1 Washing Machine
    
-- Insert sample data into the STORE_ITEMS table
INSERT INTO STORE_ITEMS (SID, ITEMNO, QUANTITY) VALUES
  (1, 101, 10), -- Store 1: 10 Laptops available
  (2, 102, 20), -- Store 2: 20 Smartphones available
  (3, 103, 5),  -- Store 3: 5 TVs available
  (4, 104, 8),  -- Store 4: 8 Microwave Ovens available
  (1, 105, 15), -- Store 1: 15 Refrigerators available
  (2, 106, 12); -- Store 2: 12 Washing Machines available

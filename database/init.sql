CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    quantity INT,
    price DECIMAL
);

INSERT INTO products (name, quantity, price)
VALUES
('Laptop', 10, 800),
('Keyboard', 50, 20),
('Mouse', 100, 10),
('Monitor', 20, 150),
('Printer', 15, 200),
('Desk', 5, 300),
('Chair', 10, 100),
('Headphones', 25, 50),
('Webcam', 30, 70),
('USB Drive', 200, 15);
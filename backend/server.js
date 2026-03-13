const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const server = express();

server.use(cors());
server.use(express.json());

/* Database connection configuration */
const dbConfig = {
  user: "inventory_user",
  host: "database",
  database: "inventory_db",
  password: "inventory_pass",
  port: 5432
};

const database = new Pool(dbConfig);

/* Fetch all products */
server.get("/products", async (req, res) => {

  console.log("Request received -> Fetch products");

  try {

    const dbResponse = await database.query("SELECT * FROM products");

    console.log("Products fetched:", dbResponse.rows.length);

    res.json(dbResponse.rows);

  } catch (error) {

    console.error("Error while fetching products:", error);

    res.status(500).send("Unable to retrieve data");

  }
});


/* Add a new product */
server.post("/products", async (req, res) => {

  const productName = req.body.name;
  const productQuantity = req.body.quantity;
  const productPrice = req.body.price;

  try {

    await database.query(
      "INSERT INTO products (name, quantity, price) VALUES ($1, $2, $3)",
      [productName, productQuantity, productPrice]
    );

    res.json({
      status: "success",
      message: "Product successfully added"
    });

  } catch (error) {

    console.error("Insert error:", error);

    res.status(500).send("Failed to insert product");

  }

});


/* Start backend server */
const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Inventory backend running on port ${PORT}`);
});
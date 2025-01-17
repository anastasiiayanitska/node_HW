import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).send("Hello, World!");
  } catch (err) {
    res.status(500).send("Error");
  }
});

app.post("/", (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      res.status(400).send("Error");
    } else {
      res.status(200).send(`Current data: ${data}`);
    }
  } catch (err) {
    res.status(500).send("Error post");
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening: ${PORT}`);
});

import pool from './db.js';

app.get('/products', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).send('Ошибка при получении данных.');
  }
});


app.post('/products', async (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).send('Поля name и price обязательны.');
  }

  try {
    const sql = 'INSERT INTO products (name, price) VALUES (?, ?)';
    const [result] = await pool.query(sql, [name, price]);
    res.status(201).send(`Продукт добавлен с ID: ${result.insertId}`);
  } catch (err) {
    res.status(500).send('Ошибка при добавлении продукта.');
  }
});

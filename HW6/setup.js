import pool from './db.js';

const createTable = async () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL
    )
  `;

  try {
    const connection = await pool.getConnection();
    await connection.query(sql);
    console.log('Таблица products создана.');
    connection.release();
  } catch (err) {
    console.error('Ошибка создания таблицы:', err);
  }
};

createTable();

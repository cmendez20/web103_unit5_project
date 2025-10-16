import { pool } from '../config/database.js';

async function getCars(req, res) {
  try {
    const results = await pool.query(`SELECT * FROM cars`);
    res.status(201).json(results.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
}

async function getCar(req, res) {
  try {
    const id = parseInt(req.params.id);
    const results = await pool.query(`SELECT * FROM cars WHERE id = $1`, [id]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
}

async function createCar(req, res) {
  try {
    const { name, exterior_color, roof, wheels, interior, price } = req.body;
    const results = await pool.query(
      `
  INSERT INTO cars (name, exterior_color, roof, wheels, interior, price)
  VALUES($1, $2, $3, $4, $5, $6)
  RETURNING *`,
      [name, exterior_color, roof, wheels, interior, price]
    );
    res.status(201).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
}

async function updateCar(req, res) {
  try {
    const id = parseInt(req.params.id);
    console.log('update car id: ' + id);
    const { name, exterior_color, roof, wheels, interior, price } = req.body;
    const results = await pool.query(
      `
          UPDATE cars SET name = $1, exterior_color = $2, roof = $3, wheels = $4, interior = $5, price = $6 WHERE id = $7`,
      [name, exterior_color, roof, wheels, interior, price, id]
    );
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
}

async function deleteCar(req, res) {
  try {
    const id = parseInt(req.params.id);
    const results = await pool.query('DELETE FROM cars WHERE id = $1', [id]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
}

export { getCars, getCar, createCar, updateCar, deleteCar };

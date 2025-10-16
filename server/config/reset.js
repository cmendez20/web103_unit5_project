import { pool } from "./database.js";

async function createTable() {
  const dropTableQuery = "DROP TABLE IF EXISTS cars;";

  const createCarsTableQuery = `
    CREATE TABLE IF NOT EXISTS cars (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        exterior_color TEXT NOT NULL,
        roof TEXT NOT NULL,
        wheels TEXT NOT NULL,
        interior TEXT NOT NULL,
        price DECIMAL(10, 2) NOT NULL
    );
  `;

  try {
    await pool.query(dropTableQuery);
    await pool.query(createCarsTableQuery);
    console.log("🎉 cars table created successfully");
  } catch (err) {
    console.error("⚠️ error creating cars table", err);
  }
}

createTable();

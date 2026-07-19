import pool from "../db/db.js";

// Get all tasks
export const getAll = async () => {
  const result = await pool.query("SELECT * FROM tasks ORDER BY id");
  return result.rows;
};

// Get task by ID
export const getById = async (id) => {
  const result = await pool.query(
    "SELECT * FROM tasks WHERE id = $1",
    [id]
  );

  return result.rows[0];
};

// Create task
export const create = async (title) => {
  const result = await pool.query(
    "INSERT INTO tasks (title) VALUES ($1) RETURNING *",
    [title]
  );

  return result.rows[0];
};

// Update task
export const update = async (id, title, done) => {
  const result = await pool.query(
    "UPDATE tasks SET title = $1, done = $2 WHERE id = $3 RETURNING *",
    [title, done, id]
  );

  return result.rows[0];
};

// Delete task
export const remove = async (id) => {
  const result = await pool.query(
    "DELETE FROM tasks WHERE id = $1 RETURNING *",
    [id]
  );

  return result.rows[0];
};
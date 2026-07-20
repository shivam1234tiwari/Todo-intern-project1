import db from "../db/database.js";

// Get all tasks
export const getAll = async () => {
  return await db.all("SELECT * FROM tasks");
};

// Get task by ID
export const getById = async (id) => {
  return await db.get(
    "SELECT * FROM tasks WHERE id = ?",
    [id]
  );
};

// Create new task
export const create = async (title) => {
  const result = await db.run(
    "INSERT INTO tasks (title, done) VALUES (?, ?)",
    [title, 0]
  );

  return {
    id: result.lastID,
    title,
    done: 0,
  };
};

// Update task
export const update = async (id, title, done) => {
  await db.run(
    "UPDATE tasks SET title = ?, done = ? WHERE id = ?",
    [title, done, id]
  );

  return await getById(id);
};

// Delete task
export const remove = async (id) => {
  const task = await getById(id);

  if (!task) {
    return null;
  }

  await db.run(
    "DELETE FROM tasks WHERE id = ?",
    [id]
  );

  return task;
};
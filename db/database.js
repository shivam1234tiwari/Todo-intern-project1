import sqlite3 from "sqlite3";
import { open } from "sqlite";
import fs from "fs";

const db = await open({
  filename: "./db/tasks.db",
  driver: sqlite3.Database,
});

// Read SQL file
const sql = fs.readFileSync("./db/init.sql", "utf8");

// Execute SQL
await db.exec(sql);

console.log("✅ SQLite Connected");
console.log("✅ Tasks table created");

export default db;
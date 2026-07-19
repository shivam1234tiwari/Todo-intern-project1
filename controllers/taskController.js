import tasks from "../data/tasks.js";
import * as repo from "../repositories/postgresRepository.js";
// GET /
export const root = (req, res) => {
  try {
    return res.status(200).json({
      name: "Task API",
      version: "1.0",
      endpoints: ["/tasks"],
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// GET /health
export const health = (req, res) => {
  try {
    return res.status(200).json({
      status: "ok",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// GET /tasks
export const alltask = (req, res) => {
  try {
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// GET /tasks/:id
export const singletask = (req, res) => {
  try {
    const id = Number(req.params.id);

    const task = tasks.find((t) => t.id === id);

    if (!task) {
      return res.status(404).json({
        error: `Task ${id} not found`,
      });
    }

    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// POST /tasks
export const createtask = (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        error: "Title is required",
      });
    }

    const newTask = {
      id: tasks.length + 1,
      title,
      done: false,
    };

    tasks.push(newTask);
    return res.status(201).json(newTask);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const updatetask = (req, res) => {
  try {
    const id = Number(req.params.id);
    const { title, done } = req.body;

    const task = tasks.find((t) => t.id === id);

    if (!task) {
      return res.status(404).json({
        error: `Task ${id} not found`,
      });
    }

    if (title !== undefined) {
      task.title = title;
    }

    if (done !== undefined) {
      task.done = done;
    }

    return res.status(200).json({
      message: "Task updated successfully",
      task,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
export const deletetask = (req, res) => {
  try {
    const id = Number(req.params.id);

    const index = tasks.findIndex((task) => task.id === id);

    if (index === -1) {
      return res.status(404).json({
        error: `Task ${id} not found`,
      });
    }

    const deletedTask = tasks.splice(index, 1);

    return res.status(200).json({
      message: "Task deleted successfully",
      task: deletedTask[0],
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
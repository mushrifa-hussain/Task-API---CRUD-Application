const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());

// In-memory task storage
let tasks = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Practice Express", completed: false }
];

let nextId = 3;

// GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// GET single task
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (task) {
    res.json(task);
  } else {
    res.status(404).send("Task not found");
  }
});

// CREATE new task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: nextId++,
    title: req.body.title,
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// UPDATE task
app.put("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);

  if (task) {
    task.title = req.body.title || task.title;
    task.completed = req.body.completed ?? task.completed;

    res.json(task);
  } else {
    res.status(404).send("Task not found");
  }
});

// DELETE task
app.delete("/tasks/:id", (req, res) => {
  const taskIndex = tasks.findIndex(t => t.id == req.params.id);

  if (taskIndex !== -1) {
    const deletedTask = tasks.splice(taskIndex, 1);
    res.json(deletedTask);
  } else {
    res.status(404).send("Task not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const router = express.Router();
const Task = require('../models/customerTask');

const { Parser } = require('json2csv');

// GET: CSV Report of all tasks
router.get('/report/csv', async (req, res) => {
  try {
    const tasks = await Task.find();

    const fields = ['ID', 'Task_name', 'Task_status', 'Task_Priority', 'Due_date', 'Activities', 'Assignee'];
    const opts = { fields };

    const parser = new Parser(opts);
    const csv = parser.parse(tasks);

    res.header('Content-Type', 'text/csv');
    res.attachment('task-report.csv');
    res.send(csv);
  } catch (err) {
    console.error('Error generating CSV:', err);
    res.status(500).json({ error: 'Failed to generate CSV report' });
  }
});

// GET all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET a single task by ID
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// CREATE a new task
router.post('/', async (req, res) => {
  const { ID, Task_name, Task_status, Task_Priority, Due_date, Activities, Assignee } = req.body;
  const task = new Task({
    ID,
    Task_name,
    Task_status,
    Task_Priority,
    Due_date,
    Activities,
    Assignee,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// UPDATE a task by ID
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    Object.keys(req.body).forEach((key) => {
      if (key in task) {
        task[key] = req.body[key];
      }
    });

    const updatedTask = await task.save();
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE a task by ID
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

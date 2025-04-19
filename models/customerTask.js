// backend/models/customerTask.js
const mongoose = require('mongoose');

const customerTaskSchema = new mongoose.Schema({
  ID: {
    type: Number,
    required: [true, 'Task ID is required'],
  },
  Task_name: {
    type: String,
    required: [true, 'Task name is required'],
    trim: true,
  },
  Task_status: {
    type: String,
    default: 'To Do',
    enum: ['To Do', 'In Progress', 'Completed', 'On Hold'],
  },
  Task_Priority: {
    type: String,
    default: 'Medium',
    enum: ['Low', 'Medium', 'High', 'Urgent'],
  },
  Due_date: {
    type: Date,
  },
  Activities: {
    type: String,
  },
  Assignee: {
    type: String,
  },
});

module.exports = mongoose.model('CustomerTask', customerTaskSchema);

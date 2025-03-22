import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  
  // Mock data - replace with actual API calls
  useEffect(() => {
    // Simulating fetching data
    const mockTasks = [
      { id: '1', a: 'Aloe Vera', b: 'Succulent', c: 'Low water' },
      { id: '2', a: 'Monstera', b: 'Tropical', c: 'Medium water' },
    ];
    setTasks(mockTasks);
  }, []);
  
  const handleAddTask = () => {
    navigate('/admin/tasks/add-task');
  };
  
  const handleUpdateTask = (id) => {
    // Implement update logic
    console.log(`Update task with id: ${id}`);
  };
  
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
    
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <button
          onClick={handleAddTask}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors border border-green-700"
        >
          Add Task
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">A</th>
              <th className="border border-gray-300 px-4 py-2 text-left">B</th>
              <th className="border border-gray-300 px-4 py-2 text-left">C</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td className="border border-gray-300 px-4 py-2">{task.a}</td>
                <td className="border border-gray-300 px-4 py-2">{task.b}</td>
                <td className="border border-gray-300 px-4 py-2">{task.c}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleUpdateTask(task.id)}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskManagement;
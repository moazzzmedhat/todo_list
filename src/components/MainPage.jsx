import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

function MainPage({ tasks, onAddTask, onToggleComplete, onArchive, onComplete, onDelete }) {
  const [newTask, setNewTask] = useState('');
  const navigate = useNavigate();

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="main-page">
      <h1>To-Do List</h1>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a task"
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
        />
        <button className="add-button" onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.length === 0 ? (
          <li className="no-tasks">No tasks yet. Add one above!</li>
        ) : (
          tasks.map((task) => (
            <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <div className="task-content">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onToggleComplete(task.id)}
                  className="task-checkbox"
                />
                <span className="task-text">{task.text}</span>
              </div>
              <div className="task-actions">
                <button className="complete-button" onClick={() => onComplete(task)}>Complete</button>
                <button className="archive-button" onClick={() => onArchive(task)}>Archive</button>
                <button className="delete-button" onClick={() => onDelete(task.id)}>Delete</button>
              </div>
            </li>
          ))
        )}
      </ul>
      <div className="nav-buttons">
        <button className="nav-button" onClick={() => navigate('/archive')}>Go to Archive</button>
        <button className="nav-button" onClick={() => navigate('/completed')}>Go to Completed Tasks</button>
      </div>
    </div>
  );
}

export default MainPage;

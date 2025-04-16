import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CompletedTasksPage.css';

function CompletedTasksPage({ completedTasks, onDeleteCompletedTask, onArchiveCompletedTask, onUncompleteTask }) {
  const navigate = useNavigate();

  const handleDeleteTask = (taskId) => {
    onDeleteCompletedTask(taskId);
  };

  const handleArchiveTask = (taskId) => {
    onArchiveCompletedTask(taskId);
  };

  const handleUncompleteTask = (taskId) => {
    onUncompleteTask(taskId);
  };

  return (
    <div className="completed-page">
      <h1>Completed Tasks</h1>
      <ul className="task-list">
        {completedTasks.map((task) => (
          <li key={task.id} className="task-item">
            <input
              type="checkbox"
              checked={true} // Completed tasks have this checked by default
              onChange={() => handleUncompleteTask(task.id)} // Unchecking will mark the task as uncompleted
            />
            <span>{task.text}</span>
            <button className="archive-button" onClick={() => handleArchiveTask(task.id)}>Archive</button>
            <button className="delete-button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div className="nav-buttons">
        <button onClick={() => navigate('/')}>Back to Main</button>
        <button onClick={() => navigate('/archive')}>Go to Archive</button>
      </div>
    </div>
  );
}

export default CompletedTasksPage;

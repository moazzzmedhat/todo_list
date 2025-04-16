import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ArchivePage.css';

function ArchivePage({ archivedTasks, onUnarchive, onDelete }) {
  const navigate = useNavigate();

  const handleUnarchive = (taskId) => {
    onUnarchive(taskId);
    navigate('/');
  };

  const handleDeleteTask = (taskId) => {
    onDelete(taskId);
  };

  return (
    <div className="archive-page">
      <h1>Archived Tasks</h1>
      <ul className="task-list">
        {archivedTasks.length === 0 ? (
          <li className="no-tasks">No tasks archived.</li>
        ) : (
          archivedTasks.map((task) => (
            <li key={task.id} className="task-item">
              <span>{task.text}</span>
              <div className="task-actions">
                <button className="unarchive-button" onClick={() => handleUnarchive(task.id)}>Unarchive</button>
                <button className="delete-button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </div>
            </li>
          ))
        )}
      </ul>
      <div className="archive-nav">
        <button className="back-button" onClick={() => navigate('/')}>Back to Main</button>
      </div>
    </div>
  );
}

export default ArchivePage;

import React from 'react';
import './TaskItem.css'; // Add your CSS file if needed

function TaskItem({ task, onDelete, onComplete, onArchive }) {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onComplete}
      />
      <span>{task.text}</span>
      <button className="archive-button" onClick={onArchive}>Archive</button>
      <button className="delete-button" onClick={onDelete}>Delete</button>
    </div>
  );
}

export default TaskItem;

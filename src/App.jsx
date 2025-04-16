import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import ArchivePage from './components/ArchivePage';
import CompletedTasksPage from './components/CompletedTasksPage';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);  // State for tasks on the main page
  const [archivedTasks, setArchivedTasks] = useState([]);  // State for archived tasks
  const [completedTasks, setCompletedTasks] = useState([]);  // State for completed tasks

  const handleArchive = (task) => {
    setArchivedTasks([...archivedTasks, task]);  // Move task to archivedTasks
    setTasks(tasks.filter((t) => t.id !== task.id));  // Remove task from main tasks
  };

  const handleUnarchive = (taskId) => {
    const taskToUnarchive = archivedTasks.find((task) => task.id === taskId);
    if (taskToUnarchive) {
      setArchivedTasks(archivedTasks.filter((task) => task.id !== taskId));  // Remove task from archivedTasks
      setTasks([...tasks, taskToUnarchive]);  // Add task back to the main tasks
    }
  };

  const handleComplete = (task) => {
    setCompletedTasks([...completedTasks, task]);  // Move task to completedTasks
    setTasks(tasks.filter((t) => t.id !== task.id));  // Remove task from main tasks
  };

  const handleArchiveCompletedTask = (taskId) => {
    const taskToArchive = completedTasks.find((task) => task.id === taskId);
    if (taskToArchive) {
      setArchivedTasks([...archivedTasks, taskToArchive]);  // Move completed task to archivedTasks
      setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));  // Remove task from completedTasks
    }
  };

  const handleDeleteArchivedTask = (taskId) => {
    setArchivedTasks(archivedTasks.filter((task) => task.id !== taskId));  // Delete task from archivedTasks
  };

  const handleDeleteCompletedTask = (taskId) => {
    setCompletedTasks(completedTasks.filter((task) => task.id !== taskId));  // Delete task from completedTasks
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
  };

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <MainPage 
                tasks={tasks}
                onAddTask={handleAddTask}
                onToggleComplete={handleToggleComplete}
                onArchive={handleArchive}
                onComplete={handleComplete}
                onDelete={handleDeleteTask}
              />
            } 
          />
          <Route path="/archive" element={<ArchivePage archivedTasks={archivedTasks} onUnarchive={handleUnarchive} onDelete={handleDeleteArchivedTask} />} />
          <Route path="/completed" element={<CompletedTasksPage completedTasks={completedTasks} onDeleteCompletedTask={handleDeleteCompletedTask} onArchiveCompletedTask={handleArchiveCompletedTask} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

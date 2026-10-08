/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Task } from './types/task';
import { INITIAL_TASKS } from './data/initialTasks';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { TasksPage } from './pages/TasksPage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  // Local state demonstrating useState hook for managing tasks array
  // Local component state only - no external database or server API
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  // Function to add a new task (demonstrating JavaScript array spread operator)
  const handleAddTask = (newTask: Task) => {
    // Array spread operator [...previous, newItem]
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  // Function to toggle task completion status (demonstrating JavaScript Array.prototype.map and condition)
  const handleToggleTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  // Function to delete a task (demonstrating JavaScript Array.prototype.filter)
  const handleDeleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Function to reset tasks back to sample data
  const handleResetTasks = (sampleTasks: Task[]) => {
    setTasks(sampleTasks);
  };

  // Function to clear all completed tasks (demonstrating Array.prototype.filter)
  const handleClearCompletedTasks = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans">
        {/* Navigation Bar Header */}
        <Navbar totalTasks={tasks.length} />

        {/* Main Routed Content Area */}
        <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 w-full">
          <Routes>
            {/* Route 1: Home Page */}
            <Route
              path="/"
              element={
                <HomePage
                  tasks={tasks}
                  onToggleTask={handleToggleTask}
                />
              }
            />

            {/* Route 2: Tasks Page */}
            <Route
              path="/tasks"
              element={
                <TasksPage
                  tasks={tasks}
                  onAddTask={handleAddTask}
                  onToggleTask={handleToggleTask}
                  onDeleteTask={handleDeleteTask}
                  onResetTasks={handleResetTasks}
                  onClearCompletedTasks={handleClearCompletedTasks}
                />
              }
            />

            {/* Route 3: About Page */}
            <Route path="/about" element={<AboutPage />} />

            {/* Fallback Route: Redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Application Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

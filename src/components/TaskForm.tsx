import React, { useState, useRef, useEffect } from 'react';
import { Priority, Task } from '../types/task';
import { PlusCircle, RotateCcw, AlertCircle, Sparkles } from 'lucide-react';

interface TaskFormProps {
  onAddTask: (task: Task) => void;
  inputRef?: React.RefObject<HTMLInputElement | null>;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onAddTask, inputRef: externalInputRef }) => {
  // Local state demonstrating useState hook for controlled form elements
  const [title, setTitle] = useState<string>('');
  const [subject, setSubject] = useState<string>('Web Development');
  const [priority, setPriority] = useState<Priority>('Medium');
  const [dueDate, setDueDate] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Demonstrates useRef hook: reference to the DOM text input element
  const internalInputRef = useRef<HTMLInputElement | null>(null);
  const activeInputRef = externalInputRef || internalInputRef;

  // Demonstrates useEffect hook: automatically focusing the input field on component mount
  useEffect(() => {
    if (activeInputRef.current) {
      activeInputRef.current.focus();
    }
  }, [activeInputRef]);

  // Form submission handler demonstrating JavaScript events and conditions
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default browser form submission (DOM event concept)
    e.preventDefault();

    // JavaScript String validation: trim leading/trailing whitespace
    const trimmedTitle = title.trim();

    // JavaScript Condition: validate non-empty string
    if (trimmedTitle.length === 0) {
      setError('Please enter a valid task title.');
      activeInputRef.current?.focus();
      return;
    }

    if (trimmedTitle.length < 3) {
      setError('Task title must be at least 3 characters long.');
      activeInputRef.current?.focus();
      return;
    }

    // Default due date if not selected: tomorrow
    let finalDueDate = dueDate;
    if (!finalDueDate) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      finalDueDate = tomorrow.toISOString().split('T')[0];
    }

    // Creating new task object (demonstrates variables, template literals, objects)
    const newTask: Task = {
      id: `task-${Date.now()}`,
      title: trimmedTitle,
      subject: subject,
      priority: priority,
      completed: false,
      dueDate: finalDueDate,
      createdAt: new Date().toISOString().split('T')[0],
    };

    // Prop callback invocation
    onAddTask(newTask);

    // Reset form states
    setTitle('');
    setDueDate('');
    setError('');

    // Demonstrates useRef: imperatively focusing the DOM input field after submission
    activeInputRef.current?.focus();
  };

  // Reset form handler
  const handleReset = () => {
    setTitle('');
    setSubject('Web Development');
    setPriority('Medium');
    setDueDate('');
    setError('');
    // Use ref to refocus input
    activeInputRef.current?.focus();
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-indigo-600" />
          <span>Add New Student Task</span>
        </h2>
        <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-mono">
          Controlled Form + useRef
        </span>
      </div>

      {/* Validation Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-sm text-red-700">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* HTML5 Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="task-title" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
            Task Title <span className="text-red-500">*</span>
          </label>
          <input
            id="task-title"
            ref={activeInputRef}
            type="text"
            placeholder="e.g., Complete Chapter 3 Exercise Questions"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (error) setError('');
            }}
            className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Subject Dropdown */}
          <div>
            <label htmlFor="task-subject" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
              Subject
            </label>
            <select
              id="task-subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="Web Development">Web Development</option>
              <option value="DBMS">DBMS</option>
              <option value="OS">Operating Systems</option>
              <option value="Data Structures">Data Structures</option>
              <option value="Computer Networks">Computer Networks</option>
              <option value="Software Eng.">Software Engineering</option>
            </select>
          </div>

          {/* Priority Dropdown */}
          <div>
            <label htmlFor="task-priority" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
              Priority
            </label>
            <select
              id="task-priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value as Priority)}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          {/* Due Date */}
          <div>
            <label htmlFor="task-duedate" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
              Due Date
            </label>
            <input
              id="task-duedate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-2">
          <button
            type="submit"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm rounded-lg shadow-xs transition-colors cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add Task</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-sm rounded-lg transition-colors cursor-pointer"
            title="Reset form fields"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </form>
    </div>
  );
};

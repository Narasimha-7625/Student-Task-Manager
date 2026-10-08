import React, { useState, useRef, useEffect } from 'react';
import { Task, FilterStatus } from '../types/task';
import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';
import { TaskFilter } from '../components/TaskFilter';
import { INITIAL_TASKS } from '../data/initialTasks';
import { 
  Search, 
  RotateCcw, 
  Trash2, 
  Focus, 
  CheckCircle2
} from 'lucide-react';

interface TasksPageProps {
  tasks: Task[];
  onAddTask: (task: Task) => void;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onResetTasks: (tasks: Task[]) => void;
  onClearCompletedTasks: () => void;
}

export const TasksPage: React.FC<TasksPageProps> = ({
  tasks,
  onAddTask,
  onToggleTask,
  onDeleteTask,
  onResetTasks,
  onClearCompletedTasks,
}) => {
  // Demonstrates useState for filter status ('all' | 'pending' | 'completed')
  const [filter, setFilter] = useState<FilterStatus>('all');

  // Demonstrates useState for search query
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Demonstrates useRef hook for direct DOM manipulation (focusing the task input)
  const taskInputRef = useRef<HTMLInputElement | null>(null);

  // Demonstrates useEffect hook: Updating the browser document title based on pending task count
  useEffect(() => {
    // JavaScript array filter to find pending tasks count
    const pendingCount = tasks.filter((t) => !t.completed).length;
    document.title = `(${pendingCount} Pending) Student Task Manager`;

    // Cleanup function demonstration
    return () => {
      document.title = 'Student Task Manager - Tutorial 2 (Unit 2)';
    };
  }, [tasks]);

  // Handler demonstrating useRef imperative action
  const handleFocusInput = () => {
    if (taskInputRef.current) {
      taskInputRef.current.focus();
      // Smoothly scroll into view if needed
      taskInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // JavaScript Array filtering logic with condition evaluation
  const filteredTasks = tasks.filter((task) => {
    // Check completion filter
    if (filter === 'completed' && !task.completed) {
      return false;
    }
    if (filter === 'pending' && task.completed) {
      return false;
    }

    // Check search query (JavaScript String methods: toLowerCase, trim, includes)
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (normalizedQuery !== '') {
      const titleMatches = task.title.toLowerCase().includes(normalizedQuery);
      const subjectMatches = task.subject.toLowerCase().includes(normalizedQuery);
      return titleMatches || subjectMatches;
    }

    return true;
  });

  // Calculate counts for filters
  const counts = {
    all: tasks.length,
    pending: tasks.filter((t) => !t.completed).length,
    completed: tasks.filter((t) => t.completed).length,
  };

  const getFilterLabel = () => {
    if (filter === 'completed') return 'Completed';
    if (filter === 'pending') return 'Pending';
    return 'Total';
  };

  return (
    <div className="space-y-6 py-4">
      {/* Page Header */}
      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Task Management Desk
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Add coursework, labs, and deadlines. Filter status or search dynamically.
          </p>
        </div>

        {/* Quick action buttons demonstrating event listeners */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={handleFocusInput}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
            title="Focus the input box using React useRef"
          >
            <Focus className="w-3.5 h-3.5" />
            <span>Focus Input (useRef)</span>
          </button>

          <button
            type="button"
            onClick={() => onResetTasks(INITIAL_TASKS)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg text-xs font-medium transition-colors cursor-pointer"
            title="Reload initial demo tasks"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Demo</span>
          </button>

          {counts.completed > 0 && (
            <button
              type="button"
              onClick={onClearCompletedTasks}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-700 hover:bg-red-100 rounded-lg text-xs font-medium transition-colors cursor-pointer"
              title="Delete all completed tasks"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Completed</span>
            </button>
          )}
        </div>
      </div>

      {/* Task Creation Form (demonstrating forms, controlled inputs, useRef) */}
      <TaskForm onAddTask={onAddTask} inputRef={taskInputRef} />

      {/* Search & Filter Bar */}
      <div className="space-y-3">
        {/* Search input (HTML5 input + React onChange event) */}
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search tasks by title or subject (e.g., 'DBMS', 'Chapter', 'Exam')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-400 hover:text-gray-700 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Task Filter Tabs (All, Pending, Completed) */}
        <TaskFilter
          currentFilter={filter}
          onFilterChange={(newFilter) => setFilter(newFilter)}
          counts={counts}
        />
      </div>

      {/* Task Display List (demonstrating lists, keys, props) */}
      <TaskList
        tasks={filteredTasks}
        filterLabel={getFilterLabel()}
        onToggle={onToggleTask}
        onDelete={onDeleteTask}
      />

      {/* Footer hint */}
      <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-100 flex items-center justify-between text-xs text-indigo-900">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
          <span>
            Tasks are preserved in React component state. Click checkboxes to toggle completion.
          </span>
        </div>
        <span className="font-mono text-[11px] bg-white px-2 py-0.5 rounded border border-indigo-200">
          Unit-II Certified
        </span>
      </div>
    </div>
  );
};

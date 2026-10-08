import React from 'react';
import { Task } from '../types/task';
import { TaskItem } from './TaskItem';
import { ClipboardList, CheckCircle } from 'lucide-react';

interface TaskListProps {
  tasks: Task[];
  filterLabel: string;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onClearCompleted?: () => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  filterLabel,
  onToggle,
  onDelete,
}) => {
  // JavaScript condition: Checking if array is empty
  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-dashed border-gray-300 p-8 text-center">
        <div className="w-12 h-12 mx-auto rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 mb-3">
          <ClipboardList className="w-6 h-6" />
        </div>
        <h3 className="text-sm font-semibold text-gray-900">No tasks found</h3>
        <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto">
          There are currently no {filterLabel.toLowerCase()} tasks in your schedule. Add a task above to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs text-gray-500 px-1">
        <span>
          Showing <strong className="text-gray-800 font-semibold">{tasks.length}</strong> {filterLabel.toLowerCase()} {tasks.length === 1 ? 'task' : 'tasks'}
        </span>
        <span className="flex items-center gap-1 text-emerald-600">
          <CheckCircle className="w-3.5 h-3.5" />
          <span>Keep up the study flow!</span>
        </span>
      </div>

      {/* HTML5 semantic unordered list */}
      <ul className="space-y-2.5">
        {/* Demonstrates JavaScript Array.prototype.map with unique keys */}
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

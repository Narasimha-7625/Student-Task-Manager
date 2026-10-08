import React from 'react';
import { Task } from '../types/task';
import { Trash2, Calendar, CheckCircle2, Circle } from 'lucide-react';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  // JavaScript condition for styling badge by priority
  const getPriorityBadgeClass = (priority: Task['priority']): string => {
    if (priority === 'High') {
      return 'bg-red-100 text-red-700 border-red-200';
    } else if (priority === 'Medium') {
      return 'bg-amber-100 text-amber-700 border-amber-200';
    } else {
      return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  return (
    <li
      className={`p-4 rounded-xl border transition-all duration-150 flex items-start gap-3.5 ${
        task.completed
          ? 'bg-gray-50/80 border-gray-200 opacity-80'
          : 'bg-white border-gray-200 hover:border-indigo-300 hover:shadow-xs'
      }`}
    >
      {/* Toggle Complete Checkbox / Icon Button */}
      <button
        type="button"
        onClick={() => onToggle(task.id)}
        aria-label={task.completed ? 'Mark task pending' : 'Mark task completed'}
        className="mt-0.5 text-gray-400 hover:text-indigo-600 transition-colors focus:outline-none cursor-pointer"
      >
        {task.completed ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-50" />
        ) : (
          <Circle className="w-5 h-5 text-gray-400 hover:text-indigo-600" />
        )}
      </button>

      {/* Task Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p
            className={`text-sm font-medium leading-snug break-words ${
              task.completed ? 'line-through text-gray-400' : 'text-gray-900'
            }`}
          >
            {task.title}
          </p>

          {/* Delete Button */}
          <button
            type="button"
            onClick={() => onDelete(task.id)}
            aria-label={`Delete task ${task.title}`}
            className="text-gray-400 hover:text-red-600 p-1 rounded-md hover:bg-red-50 transition-colors cursor-pointer shrink-0"
            title="Delete Task"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        {/* Metadata row: Subject, Priority, Due Date */}
        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
          {/* Subject tag */}
          <span className="px-2 py-0.5 rounded-md font-medium bg-gray-100 text-gray-700">
            {task.subject}
          </span>

          {/* Priority badge */}
          <span className={`px-2 py-0.5 rounded-md font-semibold border ${getPriorityBadgeClass(task.priority)}`}>
            {task.priority} Priority
          </span>

          {/* Due date */}
          <span className="flex items-center gap-1 text-gray-500">
            <Calendar className="w-3.5 h-3.5" />
            <span>Due {task.dueDate}</span>
          </span>

          {/* Status pill */}
          <span
            className={`px-2 py-0.5 rounded-md text-[11px] font-semibold ${
              task.completed ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'
            }`}
          >
            {task.completed ? 'Completed' : 'Pending'}
          </span>
        </div>
      </div>
    </li>
  );
};

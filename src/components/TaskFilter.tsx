import React from 'react';
import { FilterStatus } from '../types/task';
import { Filter } from 'lucide-react';

interface TaskFilterProps {
  currentFilter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
  counts: {
    all: number;
    pending: number;
    completed: number;
  };
}

export const TaskFilter: React.FC<TaskFilterProps> = ({
  currentFilter,
  onFilterChange,
  counts,
}) => {
  // Demonstrates JavaScript Array of filter options
  const filterOptions: { label: string; value: FilterStatus; count: number }[] = [
    { label: 'All Tasks', value: 'all', count: counts.all },
    { label: 'Pending', value: 'pending', count: counts.pending },
    { label: 'Completed', value: 'completed', count: counts.completed },
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-gray-200">
      <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        <Filter className="w-4 h-4 text-indigo-600" />
        <span>Filter Tasks:</span>
      </div>

      <div className="flex items-center gap-1.5 flex-wrap">
        {/* Demonstrates JavaScript Array.prototype.map for JSX rendering */}
        {filterOptions.map((opt) => {
          const isActive = currentFilter === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onFilterChange(opt.value)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{opt.label}</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                  isActive ? 'bg-indigo-700 text-indigo-100' : 'bg-gray-200 text-gray-800'
                }`}
              >
                {opt.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

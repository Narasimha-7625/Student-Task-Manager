import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CheckSquare, Home, ListTodo, Info } from 'lucide-react';

interface NavbarProps {
  totalTasks: number;
}

export const Navbar: React.FC<NavbarProps> = ({ totalTasks }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 font-bold text-gray-900 hover:text-indigo-600 transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-xs">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold leading-tight">Student Task Manager</span>
              <span className="text-xs text-indigo-600 font-medium">Tutorial 2 &bull; Unit 2</span>
            </div>
          </Link>

          {/* Navigation Links using React Router NavLink */}
          <nav className="flex items-center gap-1 sm:gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`
              }
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`
              }
            >
              <ListTodo className="w-4 h-4" />
              <span>Tasks</span>
              <span className="ml-1 px-1.5 py-0.5 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full">
                {totalTasks}
              </span>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`
              }
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

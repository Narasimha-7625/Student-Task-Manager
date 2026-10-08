import React from 'react';
import { Link } from 'react-router-dom';
import { Task } from '../types/task';
import { calculateTaskStats } from '../utils/taskStats';
import { 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  ListTodo, 
  ArrowRight, 
  GraduationCap, 
  BookOpen, 
  Code2,
  CheckSquare
} from 'lucide-react';

interface HomePageProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ tasks, onToggleTask }) => {
  // Calculate statistics using pure JavaScript function (demonstrating loops & conditions)
  const stats = calculateTaskStats(tasks);

  // JavaScript array slice to get recent 3 tasks
  const recentTasks = tasks.slice(0, 3);

  // String formatting with template literal
  const progressPercent = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <div className="space-y-8 py-6">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-200 text-xs font-semibold mb-4 border border-indigo-400/30">
            <GraduationCap className="w-4 h-4" />
            <span>Full Stack Web Development &bull; Tutorial 2</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Student Task Manager
          </h1>
          <p className="mt-2 text-sm sm:text-base text-indigo-100 leading-relaxed">
            Welcome to Tutorial 2. This web application demonstrates client-side React fundamentals 
            and modern JavaScript concepts from <strong>Unit 2</strong> of the syllabus — with zero backend or external database dependencies.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/tasks"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-indigo-900 font-semibold text-sm hover:bg-indigo-50 transition-colors shadow-xs"
            >
              <ListTodo className="w-4 h-4" />
              <span>Manage Tasks</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-700/60 hover:bg-indigo-700 text-white font-medium text-sm transition-colors border border-indigo-500/40"
            >
              <BookOpen className="w-4 h-4" />
              <span>Unit 2 Syllabus &amp; Viva Q&amp;A</span>
            </Link>
          </div>
        </div>

        {/* Decorative background element */}
        <div className="absolute -right-8 -bottom-10 opacity-10 pointer-events-none">
          <CheckSquare className="w-64 h-64 text-white" />
        </div>
      </section>

      {/* Quick Statistics Grid */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-gray-900">Task Overview &amp; Progress</h2>
          <span className="text-xs text-gray-500 font-medium">Calculated with pure JS loop</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {/* Card 1: Total */}
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
            <div className="flex items-center justify-between text-gray-500 text-xs font-medium">
              <span>Total Tasks</span>
              <ListTodo className="w-4 h-4 text-indigo-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">{stats.total}</p>
            <p className="text-[11px] text-gray-400 mt-0.5">Enrolled assignments &amp; tasks</p>
          </div>

          {/* Card 2: Pending */}
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
            <div className="flex items-center justify-between text-amber-600 text-xs font-medium">
              <span>Pending</span>
              <Clock className="w-4 h-4 text-amber-500" />
            </div>
            <p className="text-2xl font-bold text-amber-600 mt-2">{stats.pending}</p>
            <p className="text-[11px] text-gray-400 mt-0.5">Awaiting completion</p>
          </div>

          {/* Card 3: Completed */}
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
            <div className="flex items-center justify-between text-emerald-600 text-xs font-medium">
              <span>Completed</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <p className="text-2xl font-bold text-emerald-600 mt-2">{stats.completed}</p>
            <p className="text-[11px] text-gray-400 mt-0.5">{progressPercent}% completion rate</p>
          </div>

          {/* Card 4: High Priority */}
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
            <div className="flex items-center justify-between text-red-600 text-xs font-medium">
              <span>Urgent (High)</span>
              <AlertTriangle className="w-4 h-4 text-red-500" />
            </div>
            <p className="text-2xl font-bold text-red-600 mt-2">{stats.highPriority}</p>
            <p className="text-[11px] text-gray-400 mt-0.5">Needs immediate focus</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 bg-white p-4 rounded-xl border border-gray-200">
          <div className="flex justify-between items-center text-xs font-semibold text-gray-700 mb-2">
            <span>Overall Task Completion</span>
            <span className="text-indigo-600">{progressPercent}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </section>

      {/* Recent Tasks Preview */}
      <section className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-100">
          <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
            <ListTodo className="w-4 h-4 text-indigo-600" />
            <span>Recent Student Tasks</span>
          </h2>
          <Link
            to="/tasks"
            className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1"
          >
            <span>View All Tasks</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {recentTasks.length === 0 ? (
          <p className="text-sm text-gray-500 text-center py-4">No tasks available.</p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {recentTasks.map((t) => (
              <li key={t.id} className="py-2.5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <button
                    type="button"
                    onClick={() => onToggleTask(t.id)}
                    className="text-gray-400 hover:text-indigo-600 cursor-pointer"
                    title={t.completed ? 'Mark pending' : 'Mark completed'}
                  >
                    {t.completed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <span className="w-4 h-4 rounded-full border border-gray-300 block" />
                    )}
                  </button>
                  <span
                    className={`text-sm truncate ${
                      t.completed ? 'line-through text-gray-400' : 'text-gray-800'
                    }`}
                  >
                    {t.title}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0 text-xs">
                  <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                    {t.subject}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded font-semibold ${
                      t.priority === 'High'
                        ? 'bg-red-100 text-red-700'
                        : t.priority === 'Medium'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {t.priority}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Unit 2 Syllabus Quick Guide Box */}
      <section className="bg-slate-50 rounded-xl border border-slate-200 p-5">
        <div className="flex items-center gap-2 text-slate-800 font-bold text-sm mb-3">
          <Code2 className="w-4 h-4 text-indigo-600" />
          <span>Unit 2 Learning Objectives Demonstrated</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
          <div className="bg-white p-3 rounded-lg border border-slate-200/60">
            <strong className="text-slate-900 block mb-1">React Core:</strong>
            Functional Components, JSX Rendering, Props passing, Synthetic Events, Controlled Forms, Tailwind CSS3 styling.
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-200/60">
            <strong className="text-slate-900 block mb-1">React Hooks &amp; Routing:</strong>
            <code>useState</code> (reactive local state), <code>useEffect</code> (title updates), <code>useRef</code> (DOM input focus), <code>react-router-dom</code> (BrowserRouter, NavLink, Routes).
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-200/60">
            <strong className="text-slate-900 block mb-1">Modern JavaScript:</strong>
            <code>const</code>/<code>let</code> variables, String methods (<code>trim</code>, template literals), Array methods (<code>filter</code>, <code>map</code>, <code>slice</code>).
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-200/60">
            <strong className="text-slate-900 block mb-1">Control Flow:</strong>
            Traditional <code>for</code> loops and <code>for...of</code> loops, conditional logic (<code>if-else</code>, ternary operators), arrow functions.
          </div>
        </div>
      </section>
    </div>
  );
};

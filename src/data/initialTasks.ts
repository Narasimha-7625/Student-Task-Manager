import { Task } from '../types/task';

// Initial sample student tasks
export const INITIAL_TASKS: Task[] = [
  {
    id: 'task-1',
    title: 'Complete Unit 2 Full Stack Assignment',
    subject: 'Web Development',
    priority: 'High',
    completed: false,
    dueDate: '2026-10-12',
    createdAt: '2026-10-08',
  },
  {
    id: 'task-2',
    title: 'Review React Hooks (useState, useEffect, useRef)',
    subject: 'Web Development',
    priority: 'Medium',
    completed: true,
    dueDate: '2026-10-09',
    createdAt: '2026-10-07',
  },
  {
    id: 'task-3',
    title: 'Submit Database Management Lab Record',
    subject: 'DBMS',
    priority: 'High',
    completed: false,
    dueDate: '2026-10-14',
    createdAt: '2026-10-08',
  },
  {
    id: 'task-4',
    title: 'Read Operating Systems Chapter 4 Notes',
    subject: 'OS',
    priority: 'Low',
    completed: false,
    dueDate: '2026-10-16',
    createdAt: '2026-10-08',
  },
];

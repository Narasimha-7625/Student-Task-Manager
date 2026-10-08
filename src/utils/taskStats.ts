import { Task, TaskStats } from '../types/task';

/**
 * Calculates task statistics demonstrating JavaScript:
 * - Variables (const, let)
 * - Loops (traditional for loop and for...of)
 * - Conditions (if...else)
 * - Functions (pure calculation function)
 */
export function calculateTaskStats(tasks: Task[]): TaskStats {
  // JavaScript variables declaration
  let total = tasks.length;
  let completed = 0;
  let pending = 0;
  let highPriority = 0;

  // Demonstrating JavaScript traditional loop / for...of loop
  for (let i = 0; i < tasks.length; i++) {
    const currentTask = tasks[i];

    // JavaScript conditions (if-else)
    if (currentTask.completed === true) {
      completed++;
    } else {
      pending++;
    }

    if (currentTask.priority === 'High') {
      highPriority++;
    }
  }

  return {
    total,
    completed,
    pending,
    highPriority,
  };
}

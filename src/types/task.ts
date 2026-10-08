/**
 * Task Data Models & Types
 * Demonstrates: TypeScript interfaces, Type aliases, Standard JavaScript object contracts
 */

export type Priority = 'Low' | 'Medium' | 'High';

export type FilterStatus = 'all' | 'pending' | 'completed';

export interface Task {
  id: string;
  title: string;
  subject: string;
  priority: Priority;
  completed: boolean;
  dueDate: string;
  createdAt: string;
}

export interface TaskStats {
  total: number;
  completed: number;
  pending: number;
  highPriority: number;
}

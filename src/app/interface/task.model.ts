export interface Task {
  id: number | string ;
  title: string;
  description?: string;
  status: string;
  priority: 'High' | 'Medium' | 'Low';
  deadline?: Date | string;
//   createdAt: Date | string;
//   assignedTo?: string | User;
}

export type KanbanColumns = {
  'To-Do': Task[];
  'In-Progress': Task[];
  'Done': Task[];
  [key: string]: Task[];
};
interface User {
  userId: number;
  name: string;
}
// 'To-Do' | 'In-Progress' | 'Done';

export type TabNameType = 'To-Do' | 'In-Progress' | 'Done';
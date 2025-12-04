export interface Task {
  id: number ;
  title: string;
  description?: string;
  status: 'To-Do' | 'In-Progress' | 'Done';
  priority: 'High' | 'Medium' | 'Low';
  deadline?: Date | string;
//   createdAt: Date | string;
//   assignedTo?: string | User;
}

export type KanbanColumns = {
  'To-Do': Task[];
  'In-Progress': Task[];
  'Done': Task[];
};
interface User {
  userId: number;
  name: string;
}

export type TabNameType = 'To-Do' | 'In-Progress' | 'Done';
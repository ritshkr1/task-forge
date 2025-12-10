import { Task } from "../interface/task.model";
export type ModalMode = 'ADD' | 'EDIT' | 'VIEW' | 'CLOSED';

// Interface for the full modal state object
export interface ModalConfig<T = any> {
  mode: ModalMode;
  data: Task | null; // The item being edited or viewed
  modalTitle:string;
  primaryText:string;
  secondaryText:string;
}
export interface Task {
  id: number;
  text?: string;
  done?: boolean;
}
export interface ActionType<T> {
  payload: T;
  type: ActionEventType;
}
export type ActionEventType = 'add' | 'changed' | 'deleted';

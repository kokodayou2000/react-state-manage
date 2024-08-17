import { createContext, ReactNode, useContext, useReducer } from 'react';
import { ActionType, Task } from '@/common';

const TasksContext = createContext([] as unknown as Task[]);

const TasksDispatchContext = createContext(
  {} as React.Dispatch<ActionType<Task>>,
);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTask);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export function useTasks() {
  return useContext(TasksContext);
}
export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

const initialTask = [
  { id: 0, text: '0', done: true },
  { id: 1, text: '1', done: true },
  { id: 2, text: '2', done: false },
] as Task[];

function taskReducer(tasks: Task[], action: ActionType<Task>) {
  if (action.type === 'add') {
    {
      return [
        ...tasks,
        {
          id: action.payload.id,
          text: action.payload.text,
          done: action.payload.done,
        },
      ];
    }
  } else if (action.type === 'changed') {
    return tasks.map((task) => {
      if (task.id === action.payload.id) {
        return action.payload;
      } else {
        return task;
      }
    });
  } else if (action.type === 'deleted') {
    return tasks.filter((task) => task.id !== action.payload.id);
  } else {
    {
      throw new Error(`Unknown action type: ${action.type}`);
    }
  }
}

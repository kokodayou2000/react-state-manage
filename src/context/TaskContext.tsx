import { createContext, ReactNode, useContext, useReducer } from 'react';

const TasksContext = createContext([] as unknown as Task[]);

const TasksDispatchContext = createContext({} as React.Dispatch<Action>);

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

export interface Task {
  id: number;
  text?: string;
  done?: boolean;
}
export interface Action {
  task: Task;
  type: ActionType;
}
type ActionType = 'add' | 'changed' | 'deleted';

const initialTask = [
  { id: 0, text: '0', done: true },
  { id: 1, text: '1', done: true },
  { id: 2, text: '2', done: false },
] as Task[];

function taskReducer(tasks: Task[], action: Action) {
  if (action.type === 'add') {
    {
      return [
        ...tasks,
        {
          id: action.task.id,
          text: action.task.text,
          done: action.task.done,
        },
      ];
    }
  } else if (action.type === 'changed') {
    return tasks.map((task) => {
      if (task.id === action.task.id) {
        return action.task;
      } else {
        return task;
      }
    });
  } else if (action.type === 'deleted') {
    return tasks.filter((task) => task.id !== action.task.id);
  } else {
    {
      throw new Error(`Unknown action type: ${action.type}`);
    }
  }
}

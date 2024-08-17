import TaskList from '@/components/TaskList.tsx';
import AddTask from '@/components/AddTask.tsx';
import { useReducer } from 'react';

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

let nextId = 3;

const initialTask = [
  { id: 0, text: '0', done: true },
  { id: 1, text: '1', done: true },
  { id: 2, text: '2', done: false },
] as Task[];

function taskReducer(task: Task[], action: Action) {
  if (action.type === 'add') {
    {
      return [
        ...task,
        {
          id: action.task.id,
          text: action.task.text,
          done: action.task.done,
        },
      ];
    }
  } else if (action.type === 'changed') {
    return task.map((task) => {
      if (task.id === action.task.id) {
        return action.task;
      } else {
        return task;
      }
    });
  } else if (action.type === 'deleted') {
    return task.filter((task) => task.id !== action.task.id);
  } else {
    {
      throw new Error(`Unknown action type: ${action.type}`);
    }
  }
}
const App = () => {
  const [task, dispatch] = useReducer(taskReducer, initialTask);

  function handleAddTask(text: string) {
    dispatch({
      type: 'add',
      task: {
        id: nextId++,
        text: text,
        done: false,
      } as Task,
    });
  }

  function handleChangeTask(task: Task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(id: number) {
    dispatch({
      type: 'deleted',
      task: { id },
    });
  }
  return (
    <>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={task}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default App;

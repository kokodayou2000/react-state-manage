import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TaskType } from '@/E2/store';
import { Task } from '@/common';
import { ReduxTask } from '@/E2/components/ReduxTask.tsx';
import { addTask } from '@/E2/store/taskStore.ts';

let nextId = 3;
const AddTask: FC = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();
  return (
    <div>
      <input value={taskText} onChange={(e) => setTaskText(e.target.value)} />
      <button
        onClick={() => {
          dispatch(addTask({ id: nextId++, text: taskText, done: false }));
        }}
      >
        add
      </button>
    </div>
  );
};

export const ReduxTaskList: FC = () => {
  const tasks = useSelector<TaskType>((state) => state.tasks) as Task[];
  return (
    <div>
      <AddTask />
      {tasks &&
        tasks.map((task: Task) => {
          return (
            <div key={task.id} className="flex-1">
              {' '}
              <ReduxTask task={task} key={task.id} />
            </div>
          );
        })}
    </div>
  );
};

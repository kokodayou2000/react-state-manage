import React, { FC } from 'react';
import { useTasksDispatch } from '@/E1/context/TaskContext.tsx';
import { Task } from '@/common';

let nextId = 3;

const AddTask: FC = () => {
  const [text, setText] = React.useState<string>('');
  const dispatch = useTasksDispatch();
  return (
    <>
      <input
        placeholder="input"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        onClick={() => {
          setText('');
          const newTask = { id: nextId++, text: text, done: false } as Task;
          dispatch({
            type: 'add',
            payload: newTask,
          });
        }}
      >
        Add task
      </button>
    </>
  );
};

export default AddTask;

import React, { FC } from 'react';
import { useTasksDispatch } from '@/context/TaskContext.tsx';

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
          dispatch({
            type: 'add',
            task: {
              id: nextId++,
              text: text,
              done: false,
            },
          });
        }}
      >
        Add task
      </button>
    </>
  );
};

export default AddTask;

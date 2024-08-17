import React, { FC } from 'react';

interface AddTaskProps {
  onAddTask?: (text: string) => void;
}

const AddTask: FC<AddTaskProps> = (props: AddTaskProps) => {
  const [text, setText] = React.useState<string>('');
  const { onAddTask } = props;
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
          onAddTask?.(text);
        }}
      >
        Add task
      </button>
    </>
  );
};

export default AddTask;

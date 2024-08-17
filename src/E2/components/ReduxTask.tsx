import { FC, useState } from 'react';
import { deleteTask, updateTask } from '@/E2/store/taskStore.ts';
import { Task } from '@/common';
import { useDispatch } from 'react-redux';
interface TaskProp {
  task: Task;
}
export const ReduxTask: FC<TaskProp> = (taskProp: TaskProp) => {
  const { task } = taskProp;
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [editTaskText, setEditTaskText] = useState(task.text);
  const taskContent = edit ? (
    <>
      {task.id} |
      <input
        value={editTaskText}
        onChange={(e) => setEditTaskText(e.target.value)}
      />
      |{task.done}
      <button
        onClick={() => {
          dispatch(updateTask({ ...task, text: editTaskText }));
          setEdit(false);
        }}
      >
        save
      </button>
    </>
  ) : (
    <>
      {task.id} |{task.text} | {task.done}
      <button onClick={() => setEdit(true)}>edit</button>
    </>
  );

  return (
    <>
      {taskContent}
      <button onClick={() => dispatch(deleteTask(task.id))}>remove</button>
    </>
  );
};

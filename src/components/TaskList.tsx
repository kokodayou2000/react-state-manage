import { FC, useState } from 'react';
import { Task, useTasks, useTasksDispatch } from '@/context/TaskContext.tsx';

const TaskList: FC = () => {
  const tasks = useTasks();
  return (
    <ul>
      {tasks &&
        tasks.map((task: Task) => {
          return (
            <li key={task.id}>
              <Task task={task} />
            </li>
          );
        })}
    </ul>
  );
};
interface TaskInfo {
  task: Task;
}
const TaskInfo: FC<TaskInfo> = (taskInfo: TaskInfo) => {
  const { task } = taskInfo;
  return (
    <>
      {task.id} | {task.text} | {task.done}{' '}
    </>
  );
};
const Task: FC<TaskInfo> = (props: TaskInfo) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { task } = props;
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        <TaskInfo task={task} />
        <button onClick={() => setIsEditing(true)}>edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {taskContent}
      <button
        onClick={() => {
          dispatch({ type: 'deleted', task: { ...task, id: task.id } });
        }}
      >
        deleted
      </button>
    </label>
  );
};
export default TaskList;

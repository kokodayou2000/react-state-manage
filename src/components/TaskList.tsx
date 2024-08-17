import { FC, useState } from 'react';
import { Task } from '@/App.tsx';

interface TaskListProps {
  tasks: Task[];
  onChangeTask: (task: Task) => void;
  onDeleteTask: (id: number) => void;
}
interface TaskProps {
  task: Task;
  onChange: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskList: FC<TaskListProps> = (props: TaskListProps) => {
  const { tasks, onChangeTask, onDeleteTask } = props;
  return (
    <ul>
      {tasks.map((task: Task) => {
        return (
          <li key={task.id}>
            <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
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
const Task: FC<TaskProps> = (props: TaskProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const { task, onChange, onDelete } = props;
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
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
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button
        onClick={() => {
          onDelete(task.id);
        }}
      >
        deleted
      </button>
    </label>
  );
};
export default TaskList;

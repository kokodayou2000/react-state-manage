import { ObservableTodoStore } from '@/E3/todo/store.ts';
import { FC } from 'react';
import { observer } from 'mobx-react';

type PropType = {
  todo: ObservableTodoStore;
  removeTodo: (index: string) => void;
};

const TodoView: FC<PropType> = observer((props: PropType) => {
  const { todo, removeTodo } = props;
  function rename() {
    const newName = prompt('重新输入名称', todo.text);
    if (newName) {
      todo.rename(newName);
    }
  }
  function toggleDone() {
    todo.toggleDone();
  }
  return (
    <li onDoubleClick={rename}>
      <input type="checkbox" checked={todo.done} onChange={toggleDone} />
      <span>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>删除</button>
    </li>
  );
});

export default TodoView;

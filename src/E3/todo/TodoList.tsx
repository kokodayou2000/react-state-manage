import { ObserverTodoListStore } from '@/E3/todo/store.ts';
import { observer } from 'mobx-react';
import { FC } from 'react';
import TodoView from '@/E3/todo/TodoView.tsx';

type PropsType = {
  store: ObserverTodoListStore;
};

const TodoList: FC<PropsType> = observer((props: PropsType) => {
  const { store } = props;
  function addTodo() {
    const todoName = prompt('输入一个todo名称');
    if (todoName) {
      store.addTodo(todoName);
    }
  }
  function removeTodo(id: string) {
    store.removeTodo(id);
  }
  return (
    <>
      <button onClick={addTodo}> add Todo</button>
      <ul>
        {store.todos.map((todo) => {
          const { id } = todo;
          return <TodoView key={id} todo={todo} removeTodo={removeTodo} />;
        })}
      </ul>
    </>
  );
});

export default TodoList;

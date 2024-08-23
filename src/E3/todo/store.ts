import { nanoid } from '@reduxjs/toolkit';
import { action, computed, makeObservable, observable } from 'mobx';

export class ObservableTodoStore {
  id = '';
  text = '';
  done = false;

  constructor(text: string) {
    makeObservable(this, {
      id: observable,
      text: observable,
      done: observable,
      toggleDone: action,
    });
    this.id = nanoid(5);
    this.text = text;
  }

  toggleDone() {
    this.done = !this.done;
  }

  rename(newName: string) {
    this.text = newName;
  }
}
export class ObserverTodoListStore {
  todos: ObservableTodoStore[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      doneList: computed,
      addTodo: action,
      removeTodo: action,
    });
  }

  get doneList() {
    return this.todos.filter((item) => item.done);
  }
  addTodo(text: string) {
    const newTodo = new ObservableTodoStore(text);
    this.todos.push(newTodo);
  }

  removeTodo(id: string) {
    const index = this.todos.findIndex((item) => item.id === id);
    this.todos.splice(index, 1);
  }
}

const store = new ObserverTodoListStore();
export default store;

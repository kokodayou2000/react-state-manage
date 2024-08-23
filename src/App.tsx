import TaskList from '@/E1/components/TaskList.tsx';
import AddTask from '@/E1/components/AddTask.tsx';
import { TaskProvider } from '@/E1/context/TaskContext.tsx';
import { Provider } from 'react-redux';

import { ReduxTaskList } from '@/E2/components/ReduxTaskList.tsx';
import { Demo } from '@/E3/timer/Timer.tsx';
import TodoList from '@/E3/todo/TodoList.tsx';

import store from '@/E2/store';
import store1 from '@/E3/todo/store.ts';

const App = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="border">
          <div>context + reducer</div>
          <TaskProvider>
            <AddTask />
            <TaskList />
          </TaskProvider>
        </div>
        <div className="border">
          <div>redux</div>
          <Provider store={store}>
            <ReduxTaskList />
          </Provider>
        </div>
        <div className="border">
          <div>mobx timer</div>
          <Demo />
        </div>
        <div className="border">
          <div>mobx todolist</div>
          <TodoList store={store1} />
        </div>
      </div>
    </>
  );
};

export default App;

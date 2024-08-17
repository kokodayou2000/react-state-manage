import TaskList from '@/E1/components/TaskList.tsx';
import AddTask from '@/E1/components/AddTask.tsx';
import { TaskProvider } from '@/E1/context/TaskContext.tsx';
import { Provider } from 'react-redux';

import store from '@/E2/store';
import { ReduxTaskList } from '@/E2/components/ReduxTaskList.tsx';

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
      </div>
    </>
  );
};

export default App;

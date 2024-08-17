import TaskList from '@/components/TaskList.tsx';
import AddTask from '@/components/AddTask.tsx';
import { TaskProvider } from '@/context/TaskContext.tsx';

const App = () => {
  return (
    <>
      <TaskProvider>
        <AddTask />
        <TaskList />
      </TaskProvider>
    </>
  );
};

export default App;

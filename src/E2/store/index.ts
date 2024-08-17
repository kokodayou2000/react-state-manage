import { configureStore } from '@reduxjs/toolkit';

import taskReducer from './taskStore';
import { Task } from '@/common';

export type TaskType = {
  tasks: Task[];
};

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

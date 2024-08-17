import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '@/common';

const initialState: Task[] = [
  {
    id: 1,
    text: 'Task 1',
    done: false,
  },
  {
    id: 2,
    text: 'Task 2',
    done: true,
  },
];

export const taskStore = createSlice({
  name: 'task',
  initialState: initialState,
  reducers: {
    deleteTask(state: Task[], action: PayloadAction<number>) {
      return state.filter((item) => {
        return item.id !== action.payload;
      });
    },
    addTask(state: Task[], action: PayloadAction<Task>) {
      state.push(action.payload);
    },
    updateTask(state: Task[], action: PayloadAction<Task>) {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index != -1) {
        state[index] = action.payload;
      }
    },
  },
});
export const { deleteTask, addTask, updateTask } = taskStore.actions;

export default taskStore.reducer;

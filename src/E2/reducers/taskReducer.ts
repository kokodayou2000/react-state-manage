import { ActionType, Task } from '@/common';

export const taskReducer = (state: Task[], action: ActionType<Task>) => {
  if (action.type === 'add') {
    return [
      ...state,
      {
        state: action.payload,
      },
    ];
  } else if (action.type === 'changed') {
    return state.filter((item: Task) => {
      if (item.id == action.payload.id) {
        return action.payload;
      } else {
        return state;
      }
    });
  } else if (action.type === 'deleted') {
    return state.filter((item: Task) => {
      if (item.id !== action.payload.id) {
        return action.payload;
      }
    });
  }
};

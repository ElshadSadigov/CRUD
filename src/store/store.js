// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import  tasksReducer  from '../slice/slice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    allTasks: tasksReducer,
  },
});

export default store;

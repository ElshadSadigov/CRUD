// src/redux/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { tasks: [], allTasks: []},
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const index = state.tasks.findIndex(task => task.id === id);
      state.tasks[index] = updatedTask;
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    },
    addAllTask: (state, action) => {
        state.allTasks.push(action.payload);
      },
  },
});

export const { addTask, updateTask, deleteTask, addAllTask } = tasksSlice.actions;
export const selectTasks = state => state.tasks.tasks;
export const selectAllTasks = state => state.tasks.allTasks;

export default tasksSlice.reducer;

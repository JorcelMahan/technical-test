import { createSlice } from '@reduxjs/toolkit';

const initialState = [{ id: 0, title: 'Learn React', completed: false }];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    completedTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
      }
    },
  },
});

export const { addTodo, completedTodo, removeTodo, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
  };

const todoSlice = createSlice({  
   name: "todos",
   initialState,
   reducers: {
    addTodo: {
        reducer(state, action) {
          state.todos.push(action.payload);
        },
        prepare(title) {
          return { payload: { id: nanoid(), title, completed: false } };
        },
      },
     removeTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload
      );
      state.todos.splice(index, 1);
     },
     updateTodo: (state, action) => {
        const { id, title } = action.payload;
        const existingTodo = state.todos.find(todo => todo.id === id);
        if (existingTodo) {
          existingTodo.title = title;
        }
      },
     completeTodo: (state, action) => {
        const todo = state.todos.find(todo => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
     }
   }
});

export const { addTodo, removeTodo, updateTodo ,completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
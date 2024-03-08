import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './Features/todoSlice'


const store = configureStore(
    { 
        reducer: {
            todos: todosReducer,
          },
    }
)

export default store;
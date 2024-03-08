
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {  removeTodo, updateTodo ,completeTodo } from '../../Features/todoSlice'

const TaskList = () => {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos); 
  const [edit, setEdit] = useState({ id: null, title: '' });

  const dispatch = useDispatch();

  const submitUpdate = (id) => {
    if (!edit.title.trim()) return;
    dispatch(updateTodo({
      id: edit.id,
      title: edit.title
    }));
    setEdit({
      id: null,
      title: ''
    });
  };

  return (
    <div className="w-full text-center flex items-center flex-col gap-5">
            {todos.length > 0 ? (

      <><h1 className="text-blue-600 uppercase font-semibold text-2xl">Task List</h1>
     <div className="w-1/2 bg-slate-300 backdrop-blur-lg px-3 py-5 rounded-md">
         {todos.map((todo) => (
          <div className="flex justify-between items-center mb-5" key={todo.id}>
           {edit.id === todo.id ? (
              <input
                type="text"
                value={edit.title}
                onChange={(e) => setEdit({ ...edit, title: e.target.value })}
              />
            ) : (
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
              </span>
            )}
          
            <div className="flex gap-3">
            <button  className="bg-white text-blue-600 px-2 py-2 font-medium rounded-md" onClick={() => dispatch(completeTodo(todo.id))}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            {edit.id === todo.id ? (
              <button className="bg-white text-blue-600 px-2 py-2 font-medium rounded-md" onClick={() => submitUpdate(todo.id)}>Update</button>
            ) : (
              <button className="bg-white text-blue-600 px-2 py-2 font-medium rounded-md" onClick={() => setEdit({ id: todo.id, title: todo.title })}>
                Edit
              </button>
            )}
            <button className="bg-white text-blue-600 px-2 py-2 font-medium rounded-md" onClick={()=>{dispatch(removeTodo(todo.id))}}>Delete</button>
            </div>
          </div>
        ))}
      </div></>
            ) 
            : (
              <p>No tasks available</p> // You can change this message or remove the paragraph entirely.
            )}
         
    </div>
  );
};
export default TaskList;
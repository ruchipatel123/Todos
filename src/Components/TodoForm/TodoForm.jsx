import React, { useState } from 'react'
import { useDispatch } from'react-redux'
import { addTodo} from '../../Features/todoSlice'


const TodoForm = () => {
  const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
      if (!title.trim()) return;
      dispatch(addTodo(title));
      setTitle('');
    };

  return (
    <div>
      <div className="flex justify-center items-center gap-6">
        <input
          className="w-72 border-2  rounded-md px-3 py-3 bg-[#E8ECF4] backdrop-blur-lg"
          //set value of input field
          value={title}
          onChange={(e) => {
            //update state on changes to text
            setTitle(e.target.value);
          }}
          placeholder="Enter a new task"
        />
        <button
          className="h-full px-5 py-2 bg-[#0264F6] text-white font-medium rounded-md"
          onClick={() => {
             handleSubmit();
          }}
        >
          Add Todo Item
        </button>
      </div>
    </div>
  )
}

export default TodoForm
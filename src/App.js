import './App.css';
import TaskList from './Components/TodoForm/TaskList';
import TodoForm from './Components/TodoForm/TodoForm';

function App() {
  return (
    <>
      <div className="h-screen flex justify-center items-center flex-col gap-8">
       <TodoForm/>
       <TaskList/>
       </div>
    </>
  );
}

export default App;

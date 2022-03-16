
import React,{ useState } from 'react'
import TodoList from './TodoList';

const App = () => {

  const [task, setTask] = useState("");
  const [todos,setTodos] = useState([]);
  const changeHandler = e =>{
    setTask(e.target.value)
  }

  const submitHandler = e =>{
    e.preventDefault();
    const newTodos = [...todos,task];
    setTodos(newTodos);
    setTask("");
  }
  
  const deleteHandler = (indexValue) =>{
    const newTodos = todos.filter((todo,index)=> index !== indexValue);
    setTodos(newTodos);
  }

  return(
  <div className = 'main_div'>
    <div className='center_div'>
      <br />
      <h1>ToDo List</h1>
      <br />
      <form onSubmit={submitHandler} >
      <input type="text" placeholder='Add Items' className='input1' name="task" value={task} onChange={changeHandler}/> &nbsp;
      <input type="submit" value="Add" name="Add" className='addbutton' />
      </form>
      <TodoList todolist={todos} deleteHandler={deleteHandler}/>
    </div>

  </div>
  )
};
export default App;

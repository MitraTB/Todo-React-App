import React, { useState } from 'react';
import TodoForm from './components/ToDoForm';
import TodoList from './components/ToDoList';
import { v4 as uuidv4 } from 'uuid';
import './appStyle.css';


function App(){
const [todos, setTodos] = useState([]);
const onSubmitTodo = text =>{
  const todo = {
    id : uuidv4(),
    text: text, 
    status : 'todo'
  } 
  setTodos([...todos,todo]);
  console.log(' your app => ', todo)
  console.log(todos); 
}
const deleteHandler = id =>{
  console.log(id);
  const filteredTodos =  todos.filter(todo => todo.id !== id);
  setTodos([...filteredTodos]);
}

  return (
    <div className="App">
    <TodoForm onSubmit={onSubmitTodo}/>
    <TodoList todos={todos} onDelete={deleteHandler}/>
    </div>
  )
}


export default App;
import React from 'react';
import './App.css';

function App() {
  // Todo Object
  const todoObj = { text: "", isDone: false };
  
  // initializing todos and setTodos
  const [todos, setTodos] = React.useState([todoObj]);
  
  // adding to todolist when we click add
  const addTodo = text => {
    const newTodos = [...todos, (text)];
    setTodos(newTodos);
  };

  // remove the when we select delete
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // when clicking on done
  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  return (
    <div className="App">
     <h1> React Todo List App </h1>
    </div>
  );
}

export default App;

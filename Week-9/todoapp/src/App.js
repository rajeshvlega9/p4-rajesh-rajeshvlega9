import React from "react";
import "./App.css";
import FormTodo from "./FormTodo.js";
import Todo from "./Todo.js";

function App() {

  // initializing todos and setTodos
  const [todos, setTodos] = React.useState([]);

  // adding to todolist when we click add
  const addTodo = (text) => {
    const newTodos = [...todos, {text} ];
    setTodos(newTodos);
  };

  // remove the when we select delete
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // when clicking on done
  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todo List App </h1>
      <div>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <div>
            <Todo
              index={index}
              todo={todo}
              markTodo={markTodo}
              removeTodo={removeTodo}
              />
         </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

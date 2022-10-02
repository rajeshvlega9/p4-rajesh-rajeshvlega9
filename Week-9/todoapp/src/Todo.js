import React from "react";

function Todo({ todos, index, markTodo, removeTodo }) {
    return ( 
    <div className="todo">
            <span style={{ textDecoration: todos.isDone ? "line-through" : "" }}>
            {todos.text}
        </span>
     <div>
            <button onClick={() => markTodo(index)} > Mark </button>
            <button onClick={() => removeTodo(index)} > Remove </button>
         </div>    
    </div>  
    );
}

export default Todo;
import React from "react";

function Todo({ todo, index, markTodo, removeTodo }) {
    return ( 
    <div className="todo">
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
            {todo.text}
        </span>
     <div>
            <button onClick={() => markTodo(index)} > Mark </button>
            <button onClick={() => removeTodo(index)} > Remove </button>
         </div>    
    </div>  
    );
}

export default Todo;
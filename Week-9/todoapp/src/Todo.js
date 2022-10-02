import React from "react";

function Todo({ todo, index, markTodo, removeTodo }) {
    return ( 
        <div className="todo">
        <div className="text-area">
            <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
            {todo.text}
                </span>
         </div>
     <div className="button-area">
            <button className="mark-button" onClick={() => markTodo(index)} > Mark </button>
            <button className="remove-button" onClick={() => removeTodo(index)} > Remove </button>
         </div>    
    </div>  
    );
}

export default Todo;
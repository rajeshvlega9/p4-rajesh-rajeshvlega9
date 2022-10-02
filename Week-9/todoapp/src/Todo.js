import React from "react";

export default function Todo((todo, index, markTodo, removeTodo)) {
    return ( 
    <div className="todo">
            <span style={(textDecoration: todo.isDone, ?: "" )}>{todo.text}
            </span>
        <div>
         <Button onClick={() => markTodo(index)} /> Mark </Button>
         <Button onClick={() => removeTodo(index)} /> Remove </Button>
         </div>    
    </div>  
    );
}
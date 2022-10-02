import React from "react";
import { useState } from "react";

function FormTodo({ addTodo }) {
    const [value, setValue] = React.useState("");
    const handleSubmit = e => {
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <div><form onSubmit={handleSubmit}>
            <b>Add Todo</b>
            <input type="text" className="text-box"
                name="text" />
        </form><button type="submit">Add</button></div>
    );
}

export default FormTodo;
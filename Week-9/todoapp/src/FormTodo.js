import React from "react";

function FormTodo({ addTodo }) {
    const [value, setValue] = React.useState("");
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <div><form onSubmit={handleSubmit}>
            <b>Add Todo </b>
            <input
                type="text"
                className="text-box"
                name="text" value={value}
                onChange={e => setValue(e.target.value)}
                placeholder=""/>
            <button type="submit">Add</button>
        </form></div>
    );
}

export default FormTodo;
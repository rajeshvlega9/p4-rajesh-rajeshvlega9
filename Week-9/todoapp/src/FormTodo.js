import React from "react";

function FormTodo({ addTodo }) {
    const [value, setValue] = React.useState("");
    const handleSubmit = e => {
        //avoid refresh
        e.preventDefault();
        // if no value or text then return
        if (!value) return;
        // add todo 
        addTodo(value);
        setValue("");
    };

    return (
        <div><form onSubmit={handleSubmit}>
            <b>Add Todo </b>
            <input
                type="text"
                className="text-box"
                name="text"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button className="add-button" type="submit">Add</button>
        </form></div>
    );
}

export default FormTodo;
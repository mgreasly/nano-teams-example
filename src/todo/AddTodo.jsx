import React, { useState } from "react";
import { connect } from "redux-zero/react";
import { actions, mapToProps } from "./store";

export default connect(mapToProps, actions)(({ addTask }) => {
    const [value, setValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addTask(value);
        setValue('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={value} onChange={e => setValue(e.target.value)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
});
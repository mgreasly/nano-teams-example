import React from "react";
import { connect } from "redux-zero/react";
import { actions, mapToProps } from "./store";

const Item = ({ item, toggleState }) => {
    const style = { textDecoration: item.completed ? 'line-through' : '' };
    return <li style={style}><a href='#' onClick={() => toggleState(item.id)}>{item.id}. {item.title}</a></li>
}

export default connect(mapToProps, actions)(({ todoList, status, toggleCompleted }) => {
    return (
        <ul>
            {todoList.map(item => {
                switch (status) {
                    case 'active': if (!item.completed) return <Item key={item.id} item={item} toggleState={toggleCompleted} />; break;
                    case 'completed': if (item.completed) return <Item key={item.id} item={item} toggleState={toggleCompleted} />; break;
                    default: return <Item key={item.id} item={item} toggleState={toggleCompleted} />; break;
                }
            })}
        </ul>
    )
});

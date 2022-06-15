import React from "react";
import { Provider } from 'redux-zero/react';
import store from './store';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import FilterTodos from "./FilterTodos";

export default () => (
    <Provider store={store}>
        <AddTodo />
        <TodoList />
        <FilterTodos />
    </Provider>
);

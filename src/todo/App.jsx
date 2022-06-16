import React from "react";
import { Provider } from 'redux-zero/react';
import { Flex } from '@fluentui/react-northstar';
import store from './store';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import FilterTodos from "./FilterTodos";

export default () => (
    <Provider store={store}>
        <Flex column={true}>
            <AddTodo />
            <FilterTodos />
            <TodoList />
        </Flex>
    </Provider>
);

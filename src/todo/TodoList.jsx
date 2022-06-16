import React from "react";
import { Flex, List } from '@fluentui/react-northstar';
import { AcceptIcon, CircleIcon } from '@fluentui/react-icons-northstar';

import { connect } from "redux-zero/react";
import { actions, mapToProps } from "./store";

const Item = (item, toggleState) => {
    const media = item.completed ? <AcceptIcon /> : <CircleIcon outline />;
    const onClick = () => toggleState(item.id);
    return {
        key: item.id,
        media: media,
        header: item.title,
        headerMedia: '',
        content: 'A todo list item - click to change status',
        onClick: onClick
    }
};

export default connect(mapToProps, actions)(({ todoList, status, toggleCompleted }) => {
    var items = todoList;
    switch (status) {
        case "active": items = items.filter(item => item.completed == false); break;
        case "completed": items = items.filter(item => item.completed == true); break;
    }
    return (
        <Flex gap="gap.medium" padding="padding.medium">
            <List items={items.map(item => Item(item, toggleCompleted))} />
        </Flex>
    )
});

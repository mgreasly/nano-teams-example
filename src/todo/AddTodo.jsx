import React, { useState } from "react";
import { Flex, Input, Button, Label } from '@fluentui/react-northstar'
import { StarIcon } from '@fluentui/react-icons-northstar'

import { connect } from "redux-zero/react";
import { actions, mapToProps } from "./store";

export default connect(mapToProps, actions)(({ addTask }) => {
    const [value, setValue] = useState('');

    const onClick = (e) => {
        e.preventDefault();
        addTask(value);
        setValue('');
    }

    return (
        <Flex gap="gap.medium" padding="padding.medium">
            <Flex.Item grow>
                <Flex>
                    <Label icon={<StarIcon />} styles={{ background: 'darkgrey', height: 'auto', padding: '0 15px' }} />
                    <Flex.Item grow>
                        <Input value={value} onChange={e => setValue(e.target.value)} placeholder="Enter new todo list item..." fluid />
                    </Flex.Item>
                </Flex>
            </Flex.Item>
            <Button content="Add Item" onClick={onClick} />
        </Flex>
    )
});
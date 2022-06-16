import React from "react";
import { connect } from "redux-zero/react";
import { Flex, RadioGroup } from '@fluentui/react-northstar';
import { actions, mapToProps } from "./store";

export default connect(mapToProps, actions)(({ status, setStatus }) => {

    const items = [
        { label: 'all', key: 'all', value: 'all' },
        { label: 'active', key: 'active', value: 'active' },
        { label: 'completed', key: 'completed', value: 'completed' },
    ];

    return (
        <Flex gap="gap.medium" padding="padding.medium">
            <RadioGroup 
                defaultCheckedValue={'all'} 
                items={items} 
                onCheckedValueChange={(e, props) => setStatus(props.label)} />
        </Flex>
    )
});

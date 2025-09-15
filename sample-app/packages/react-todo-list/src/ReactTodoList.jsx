import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Heading from '@splunk/react-ui/Heading';
import Menu from '@splunk/react-ui/Menu';

import { StyledContainer } from './ReactTodoListStyles';

const ReactTodoList = ({ name = 'My Tasks', items, onCheck }) => {

    const handleClick = (index) => {
        const item = items[index];
        onCheck(item.id);
    };

    return (
        <StyledContainer>
            <Heading level={1}>{name}</Heading>
            <Menu>
                {items.map((item, index) => (
                    <Menu.Item
                        selectable
                        selected={item.done}
                        onClick={() => handleClick(index)}
                        key={item.id}
                    >
                        {item.title}
                    </Menu.Item>
                ))}
            </Menu>
        </StyledContainer>
    );
};

ReactTodoList.propTypes = {
    name: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onCheck: PropTypes.func.isRequired,
};

export default ReactTodoList;

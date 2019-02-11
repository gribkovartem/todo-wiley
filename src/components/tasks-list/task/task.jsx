import React from 'react';
import styled from 'styled-components';

import { Icon } from '../../icon';

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    background: #373c49;
    padding: 10px 16px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 2px solid #757575;
    cursor: pointer;
`;

const TaskTitle = styled.span`
    color: #fff;
    font-size: 16px;
    text-decoration: ${props => props.completed ? 'line-through' : 'initial'};
`;

export function Task({ id, title, completed, handleDeleteTask }) {
    return (
        <Wrapper onClick={() => console.log('open modal')}>
            <TaskTitle completed={completed}>{title}</TaskTitle>
            <Icon
                icon="times"
                color="#f00"
                onClick={event => {
                    handleDeleteTask(id);
                    event.stopPropagation();
                }}
            />
        </Wrapper>
    );
}

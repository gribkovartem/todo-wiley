import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Icon } from '../../icon';
import { Checkbox } from '../../checkbox';

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
    text-decoration: ${props => (props.completed ? 'line-through' : 'initial')};
    padding-left: 3px;
`;

const LeftSide = styled.div`
    display: flex;
    align-items: center;
`;

export function Task({
    id,
    title,
    completed,
    handleCompleteTask,
    handleDeleteTask,
    ...rest
}) {
    return (
        <Wrapper {...rest}>
            <LeftSide>
                <Checkbox
                    checked={completed}
                    onChange={event => {
                        handleCompleteTask(id);
                        event.stopPropagation();
                    }}
                    onClick={event => {
                        event.stopPropagation();
                    }}
                />
                <TaskTitle
                    completed={completed}
                    onClick={event => {
                        handleCompleteTask(id);
                        event.stopPropagation();
                    }}
                >
                    {title}
                </TaskTitle>
            </LeftSide>
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

Task.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    handleCompleteTask: PropTypes.func.isRequired,
    handleDeleteTask: PropTypes.func.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Task } from '../../components';
import { SORT_UP } from '../../constants';
import { withStorage } from '../../hocs';

const TaskWrapper = styled.div`
    :not(last-of-type) {
        margin-bottom: 10px;
    }
`;

const EmptyMessage = styled.span`
    color: #fff;
    font-size: 18px;
    margin-top: 20px;
`;

export const TasksList = withStorage(function({
    tasks,
    sortOrder,
    handleCompleteTask,
    handleDeleteTask,
    handleOpenForm,
}) {
    return (
        <>
            {tasks.length ? tasks.sort(sortTasks(sortOrder)).map(task => {
                const { id, title, completed } = task;

                return (
                    <TaskWrapper key={id ? id : title}>
                        <Task
                            id={id}
                            title={title}
                            completed={completed}
                            handleCompleteTask={handleCompleteTask}
                            handleDeleteTask={handleDeleteTask}
                            onClick={() => handleOpenForm(task)}
                        />
                    </TaskWrapper>
                );
            }) : <EmptyMessage>No tasks yet 😞</EmptyMessage>}
        </>
    );
}, 'tasks');

TasksList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    sortOrder: PropTypes.string.isRequired,
    handleCompleteTask: PropTypes.func.isRequired,
    handleDeleteTask: PropTypes.func.isRequired,
    handleOpenForm: PropTypes.func.isRequired,
};

const sortTasks = sortOrder => {
    return (a, b) => {
        if (a.title > b.title) {
            return sortOrder === SORT_UP ? 1 : -1;
        }
        if (a.title < b.title) {
            return sortOrder === SORT_UP ? -1 : 1;
        }

        return 0;
    };
};

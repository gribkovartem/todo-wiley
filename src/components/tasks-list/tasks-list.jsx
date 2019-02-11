import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Task } from '../../components';
import { SORT_UP } from '../../constants';

const TaskWrapper = styled.div`
    :not(last-of-type) {
        margin-bottom: 10px;
    }
`;

export function TasksList({
    tasks,
    sortOrder,
    handleCompleteTask,
    handleDeleteTask,
    handleOpenForm,
}) {
    return (
        <>
            {tasks.sort(sortTasks(sortOrder)).map(task => {
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
            })}
        </>
    );
}

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

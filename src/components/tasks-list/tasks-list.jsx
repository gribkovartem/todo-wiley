import React from 'react';
import styled from 'styled-components';

import { Task } from '../../components';
import { SORT_UP } from '../../constants';

const TaskWrapper = styled.div`
    :not(last-of-type) {
        margin-bottom: 10px;
    }
`;

export function TasksList({ tasks, sortOrder, handleDeleteTask }) {
    return (
        <>
            {tasks
                .sort(sortTasks(sortOrder))
                .map(({ id, title, completed }) => {
                    return (
                        <TaskWrapper key={id ? id : title}>
                            <Task
                                id={id}
                                title={title}
                                completed={completed}
                                handleDeleteTask={handleDeleteTask}
                            />
                        </TaskWrapper>
                    );
                })}
        </>
    );
}

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

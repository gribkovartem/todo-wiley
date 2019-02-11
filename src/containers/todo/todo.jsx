import React from 'react';
import styled from 'styled-components';

import { Header, TasksList, TaskForm, Icon } from '../../components';
import { SORT_UP, SORT_DOWN } from '../../constants';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

const SortIcon = styled(Icon)`
    margin-bottom: 14px;
`;

export class Todo extends React.Component {
    state = {
        tasks: [
            { id: 1, title: 'title 1', text: '', completed: false },
            { id: 2, title: 'title 2', text: '', completed: false },
            { id: 3, title: 'title 3', text: '', completed: true },
            { id: 4, title: 'title 4', text: '', completed: false },
        ],
        sortOrder: SORT_UP,
        formOpened: false,
    };

    handleOpenForm = () => {
        const { formOpened } = this.state;
        this.setState({ formOpened: !formOpened });
    };

    handleAddTask = task => {
        const { tasks } = this.state;
        this.setState({ tasks: [...tasks, task] });
    };

    handleCompleteTask() {}

    handleDeleteTask = id => {
        const { tasks } = this.state;

        if (window.confirm('Are you sure?')) {
            this.setState({ tasks: tasks.filter(task => task.id !== id) });
        }
    };

    handleChangeSortOrder = () => {
        const { sortOrder } = this.state;

        if (sortOrder === SORT_UP) {
            this.setState({ sortOrder: SORT_DOWN });
        }

        if (sortOrder === SORT_DOWN) {
            this.setState({ sortOrder: SORT_UP });
        }
    };

    render() {
        const { tasks, sortOrder, formOpened } = this.state;

        return (
            <Container>
                <Header handleOpenForm={this.handleOpenForm} />
                <SortIcon
                    icon={`sort-alpha-${sortOrder}`}
                    color="#fff"
                    onClick={() => this.handleChangeSortOrder()}
                />
                <TasksList
                    tasks={tasks}
                    sortOrder={sortOrder}
                    handleDeleteTask={this.handleDeleteTask}
                />
                <TaskForm
                    isOpen={formOpened}
                    onRequestClose={() => this.setState({ formOpened: false })}
                    handleAddTask={this.handleAddTask}
                />
            </Container>
        );
    }
}

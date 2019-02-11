import React from 'react';
import styled from 'styled-components';

import { TasksList, Icon } from '../../components';
import { TaskForm } from '../task-form';
import { SORT_UP, SORT_DOWN } from '../../constants';

const Title = styled.h1`
    color: #fff;
    font-weight: 700;
    font-size: 48px;
`;

const Controls = styled.div`
    display: flex;
    justify-content: space-between;
`;

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
        taskForEdit: null,
    };

    handleOpenForm = (task = null) => {
        const { formOpened } = this.state;

        if (task) {
            this.setState({ taskForEdit: task });
            this.setState({ formOpened: true });
        } else {
            this.setState({ formOpened: !formOpened });
        }
    };

    handleCloseForm = () => {
        this.setState({ formOpened: false, taskForEdit: null });
    };

    handleAddTask = task => {
        const { tasks } = this.state;
        this.setState({
            tasks: [
                ...tasks,
                {
                    ...task,
                    id: Math.max.apply(Math, tasks.map(task => task.id)) + 1,
                },
            ],
            taskForEdit: null,
        });
    };

    handleCompleteTask = id => {
        const { tasks } = this.state;
        const updatedTasks = [...tasks];
        const task = updatedTasks.find(task => task.id === id);
        task.completed = !task.completed;

        this.setState({
            tasks: updatedTasks,
        });
    };

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
        const { tasks, sortOrder, formOpened, taskForEdit } = this.state;

        return (
            <Container>
                <Title>Todo app</Title>
                <Controls>
                    <SortIcon
                        icon={`sort-alpha-${sortOrder}`}
                        color="#fff"
                        onClick={() => this.handleChangeSortOrder()}
                    />
                    <Icon
                        icon="plus"
                        color="#fff"
                        onClick={() => this.handleOpenForm()}
                    />
                </Controls>
                <TasksList
                    tasks={tasks}
                    sortOrder={sortOrder}
                    handleCompleteTask={this.handleCompleteTask}
                    handleDeleteTask={this.handleDeleteTask}
                    handleOpenForm={this.handleOpenForm}
                />
                <TaskForm
                    isOpen={formOpened}
                    onRequestClose={this.handleCloseForm}
                    handleAddTask={this.handleAddTask}
                    taskForEdit={taskForEdit}
                />
            </Container>
        );
    }
}

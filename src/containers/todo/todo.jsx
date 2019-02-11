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

const INITIAL_TASK = {
    title: '',
    text: '',
    completed: false,
};

export class Todo extends React.Component {
    state = {
        tasks: [],
        sortOrder: SORT_UP,
        formOpened: false,
        taskForEdit: INITIAL_TASK,
    };

    componentDidMount() {
        const tasks = window.localStorage.getItem('tasks');

        if (tasks) {
            this.setState({ tasks: JSON.parse(tasks) });
        }
    }

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
        this.setState({ formOpened: false, taskForEdit: INITIAL_TASK });
    };

    handleSaveTask = task => {
        const { tasks } = this.state;
        const taskExists = tasks.find(item => item.id === task.id);
        taskExists ? this.updateTask(task) : this.addTask(task);
    };

    addTask = task => {
        const { tasks } = this.state;

        this.setState({
            tasks: [
                ...tasks,
                {
                    ...task,
                    id: tasks.length
                        ? Math.max.apply(Math, tasks.map(task => task.id)) + 1
                        : 0,
                },
            ],
            taskForEdit: INITIAL_TASK,
        });
    };

    updateTask = task => {
        const { tasks } = this.state;
        const updatedTasks = [...tasks];
        const taskIndex = updatedTasks.findIndex(item => item.id === task.id);

        updatedTasks[taskIndex] = task;
        this.setState({
            tasks: updatedTasks,
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
                {formOpened && (
                    <TaskForm
                        isOpen={formOpened}
                        onRequestClose={this.handleCloseForm}
                        handleSaveTask={this.handleSaveTask}
                        taskForEdit={taskForEdit}
                    />
                )}
            </Container>
        );
    }
}

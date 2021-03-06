import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ModalBox, Input, TextArea, Button } from '../../components';

const Form = styled.form`
    width: 500px;
    padding: 10px;
    border-radius: 5px;
    background: #fff;
    color: #000;
`;

const ControlWrapper = styled.div`
    margin-bottom: 10px;
`;

const INITIAL_TASK = {
    title: '',
    text: '',
    completed: false,
};

export class TaskForm extends React.Component {
    state = {
        task: this.props.taskForEdit,
    };

    render() {
        const {
            isOpen,
            onRequestClose,
            handleSaveTask,
            taskForEdit,
        } = this.props;
        const { task } = this.state;
        const { title, text } = task;

        return (
            <ModalBox isOpen={isOpen} onRequestClose={onRequestClose}>
                <Form
                    onSubmit={() => {
                        handleSaveTask(task);
                        this.setState({ task: INITIAL_TASK });
                        onRequestClose();
                    }}
                >
                    <ControlWrapper>
                        <Input
                            type="text"
                            placeholder="Type title"
                            value={title}
                            required
                            onChange={event =>
                                this.setState({
                                    task: {
                                        ...task,
                                        title: event.target.value,
                                    },
                                })
                            }
                        />
                    </ControlWrapper>
                    <ControlWrapper>
                        <TextArea
                            value={text}
                            onChange={event =>
                                this.setState({
                                    task: { ...task, text: event.target.value },
                                })
                            }
                        />
                    </ControlWrapper>
                    <Button type="submit">
                        {taskForEdit.id !== undefined ? 'update' : 'save'}
                    </Button>
                </Form>
            </ModalBox>
        );
    }
}

TaskForm.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    handleSaveTask: PropTypes.func.isRequired,
    taskForEdit: PropTypes.object,
};

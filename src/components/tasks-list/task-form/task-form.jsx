import React from 'react';
import styled from 'styled-components';

import { ModalBox } from '../../modal-box';

const Form = styled.div`
    width: 500px;
    padding: 10px;
    border-radius: 5px;
    background: #fff;
    color: #000;
`;

export function TaskForm({ isOpen, onRequestClose, handleAddTask }) {
    return (
        <ModalBox isOpen={isOpen} onRequestClose={onRequestClose}>
            <Form>
                <input type="text" />
                <textarea name="" id="" cols="30" rows="10" />
                <button
                    onClick={() => {
                        handleAddTask({title: 123, text: 'text', completed: false});
                        onRequestClose();
                    }}
                >
                    save
                </button>
            </Form>
        </ModalBox>
    );
}

import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import { Todo } from './containers';

import './components/icon/icons-settings';

Modal.setAppElement('#root');

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: start;
    flex-direction: column;
    width: 600px;
    margin: 0 auto;
`;

export function App() {
    return (
        <Container>
            <Todo />
        </Container>
    );
}

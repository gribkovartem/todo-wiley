import React from 'react';
import styled from 'styled-components';

import { Icon } from '../icon';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h1`
    color: #fff;
    font-weight: 700;
    font-size: 48px;
`;

export function Header({ handleOpenForm }) {
    return (
        <Wrapper>
            <Title>Todo list</Title>
            <Icon
                icon="plus"
                size="2x"
                color="#fff"
                onClick={() => handleOpenForm()}
            />
        </Wrapper>
    );
}

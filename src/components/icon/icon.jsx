import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
    color: ${props => props.color};
    cursor: pointer;
    height: 100%;
`;

export function Icon(props) {
    return (
        <Wrapper>
            <FontAwesomeIcon {...props} />
        </Wrapper>
    );
}

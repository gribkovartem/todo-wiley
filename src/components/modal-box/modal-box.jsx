import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

export function ModalBox(props) {
    const { children, ...rest } = props;

    return (
        <Modal
            {...rest}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'unset',
                    bottom: 'unset',
                    transform: 'translateY(-50%) translateX(-50%)',
                    overflow: 'initial',
                },
            }}
        >
            {children}
        </Modal>
    );
}

ModalBox.propTypes = {
    children: PropTypes.element.isRequired,
};

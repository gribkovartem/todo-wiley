import React from 'react';
import PropTypes from 'prop-types';

export function Checkbox(props) {
    return <input type="checkbox" {...props} />;
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
};

import React from 'react';

export function withStorage(Component, storedProp) {
    return class extends React.Component {
        componentDidUpdate() {
            window.localStorage.setItem(
                storedProp,
                JSON.stringify(this.props[storedProp]),
            );
        }

        render() {
            return <Component {...this.props} />;
        }
    };
}

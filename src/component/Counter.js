/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

class Counter extends Component {
    state = { count: 0 };

    handleCount = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        const { children } = this.props;
        const { count } = this.state;
        return children(count, this.handleCount);
    }
}

export default Counter;

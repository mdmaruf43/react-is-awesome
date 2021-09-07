// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

class Bracket extends Component {
    bracket = (text) => `[ ${text} ]`;

    render() {
        // eslint-disable-next-line react/destructuring-assignment
        return this.props.children({ bracket: this.bracket });
    }
}

export default Bracket;

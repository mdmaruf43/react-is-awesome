import React, { Component } from 'react';

class Button extends Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange, parameter: curentParameter } = this.props;
        const { change: nextChange, parameter: nextParameter } = nextProps;
        if (currentChange === nextChange && curentParameter === nextParameter) {
            return false;
        }
        return true;
    }

    render() {
        const { change, parameter, show } = this.props;
        return (
            <>
                <button type="button" onClick={() => change(parameter)}>
                    Click Here
                </button>
                {show && <p>Hello</p>}
            </>
        );
    }
}

export default Button;

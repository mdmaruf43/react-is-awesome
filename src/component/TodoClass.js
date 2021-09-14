import React, { Component } from 'react';

class TodoClass extends Component {
    state = {
        todo: '',
        warning: null,
    };

    handleChange = (e) => {
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js')
            ? 'You Need JS Skill to complete the task'
            : null;

        this.setState({
            todo: inputValue,
            warning,
        });
    };

    render() {
        const { todo, warning } = this.state;
        return (
            <div>
                <p>{todo}</p>
                <input type="text" name="" id="" value={todo} onChange={this.handleChange} />
                <h1>{warning || 'Good Choice!'}</h1>
            </div>
        );
    }
}

export default TodoClass;

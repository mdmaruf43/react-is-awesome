import React from 'react';

export default class Form extends React.Component {
    state = {
        title: 'JavaScript',
        text: 'JavaScript is Awesome',
        selectOption: 'React',
        isAwesome: true,
    };

    handleChange = (e) => {
        console.log(e.target.value);
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                text: e.target.value,
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                selectOption: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                isAwesome: e.target.checked,
            });
        } else {
            console.log('Nothing Here');
        }
    };

    handleSubmit = (e) => {
        const { title, text, selectOption, isAwesome } = this.state;
        e.preventDefault();
        console.log(title, text, selectOption, isAwesome);
    }

    render() {
        const { title, text, selectOption, isAwesome } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={title}
                        onChange={this.handleChange}
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter Title"
                    />
                    <br />
                    <br />
                    <textarea
                        name="text"
                        id=""
                        value={text}
                        onChange={this.handleChange}
                        cols="30"
                        rows="10"
                    />
                    <br />
                    <br />
                    <select value={selectOption} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                    </select>
                    <br />
                    <br />
                    <input type="checkbox" checked={isAwesome} onChange={this.handleChange} />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

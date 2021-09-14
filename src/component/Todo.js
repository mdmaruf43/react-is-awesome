import { useState } from 'react';

const Todo = () => {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const updateWarning = inputValue.includes('.js')
            ? 'You Need JS Skill to complete the task'
            : null;

        setTodo(inputValue);
        setWarning(updateWarning);
    };

    return (
        <div>
            <p>{todo}</p>
            <input type="text" name="" id="" value={todo} onChange={handleChange} />
            <h1>{warning || 'Good Choice!'}</h1>
        </div>
    );
};

export default Todo;

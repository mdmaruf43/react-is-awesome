import React from 'react';

const ClickCounter = ({ counter, handleCount }) => (
    <div>
        <button onClick={handleCount} type="button">
            Clicked {counter} times
        </button>
    </div>
);

export default ClickCounter;

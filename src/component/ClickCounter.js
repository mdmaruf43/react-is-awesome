import React from 'react';
import withCounter from './HOC/withCounter';

const ClickCounter = (props) => {
    const { count, handleCount } = props;
    return (
        <div>
            <button onClick={handleCount} type="button">
                Clicked {count} times
            </button>
        </div>
    );
};

export default withCounter(ClickCounter);

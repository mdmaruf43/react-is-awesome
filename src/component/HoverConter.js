/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import withCounter from './HOC/withCounter';

const HoverConter = (props) => {
    const { count, handleCount } = props;
    return (
        <div>
            <h1 onMouseOver={handleCount}>Hoverd {count} times</h1>
        </div>
    );
};

export default withCounter(HoverConter);

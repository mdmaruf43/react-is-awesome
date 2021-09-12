/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';

const HoverConter = ({ counter, handleCount }) => (
    <div>
        <h1 onMouseOver={handleCount}>Moved {counter} times</h1>
    </div>
);

export default HoverConter;

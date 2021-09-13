/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';

const HoverConter = ({ counter, handleCount, theme, switchTheme }) => {
    const style = theme === 'dark' ? { backgroundColor: '#000', color: '#fff' } : null;
    return (
        <div>
            <h1 style={style} onMouseOver={handleCount}>
                Moved {counter} times
            </h1>
            <button type="button" onClick={switchTheme}>
                Change Theme
            </button>
        </div>
    );
};

export default HoverConter;

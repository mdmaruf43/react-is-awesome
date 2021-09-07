import React from 'react';

const Text = ({ addEmoji, bracket }) => {
    let text = 'I Love You';
    if (addEmoji) {
        text = addEmoji(text, '❤');
    }
    if (bracket) {
        text = bracket(text);
    }
    return <div>{text}</div>;
};

export default Text;

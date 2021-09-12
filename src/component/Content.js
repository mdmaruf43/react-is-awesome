import React from 'react';
import ThemeContext from '../contexts/themeContext';
import Counter from './Counter';
import HoverConter from './HoverConter';

const Content = () => (
    <div>
        <h1>This is a content</h1>
        <Counter>
            {(count, handleCount) => (
                <ThemeContext.Consumer>
                    {({ theme }) => (
                        <HoverConter counter={count} handleCount={handleCount} theme={theme} />
                    )}
                </ThemeContext.Consumer>
            )}
        </Counter>
    </div>
);

export default Content;

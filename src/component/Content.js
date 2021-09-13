import React, { useContext } from 'react';
import themeContext from '../contexts/themeContext';
import Counter from './Counter';
import HoverConter from './HoverConter';

const Content = () => {
    const context = useContext(themeContext);
    const { theme, switchTheme } = context;
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {/* {(count, handleCount) => (
                        <ThemeContext.Consumer>
                            {({ theme, switchTheme }) => (
                                <HoverConter
                                    counter={count}
                                    handleCount={handleCount}
                                    theme={theme}
                                    switchTheme={switchTheme}
                                />
                            )}
                        </ThemeContext.Consumer>
                    )} */}
                {(count, handleCount) => (
                    <HoverConter
                        counter={count}
                        handleCount={handleCount}
                        theme={theme}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div>
    );
};

export default Content;

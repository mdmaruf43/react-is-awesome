import React from 'react';
import ThemeContext from '../contexts/themeContext';
import Counter from './Counter';
import HoverConter from './HoverConter';

class Content extends React.Component {
    componentDidMount() {
        console.log(this.context);
    }

    render() {
        const { theme, switchTheme } = this.context;
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
    }
}
Content.contextType = ThemeContext;

export default Content;

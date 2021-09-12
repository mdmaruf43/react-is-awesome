import React from 'react';
import ClickCounter from './component/ClickCounter';
import Counter from './component/Counter';
import Section from './component/Section';
import ThemeContext from './contexts/themeContext';

class App extends React.Component {
    state = {
        theme: 'light',
    };

    render() {
        const { theme } = this.state;
        return (
            <>
                <Counter>
                    {(count, handleCount) => (
                        <ClickCounter counter={count} handleCount={handleCount} />
                    )}
                </Counter>
                <ThemeContext.Provider value={{ theme }}>
                    <Section />
                </ThemeContext.Provider>
            </>
        );
    }
}

export default App;

import ClickCounter from './component/ClickCounter';
import Counter from './component/Counter';
import HoverConter from './component/HoverConter';

function App() {
    return (
        <>
            {/* <User render={(isLogedIn) => (isLogedIn ? 'Maruf' : 'Guest')} /> */}
            {/* <Counter
                render={(count, handleCount) => (
                    <ClickCounter counter={count} handleCount={handleCount} />
                )}
            /> */}
            <Counter>
                {(count, handleCount) => <ClickCounter counter={count} handleCount={handleCount} />}
            </Counter>
            {/* <Counter
                render={(count, handleCount) => (
                    <HoverConter counter={count} handleCount={handleCount} />
                )}
            /> */}
            <Counter>
                {(count, handleCount) => <HoverConter counter={count} handleCount={handleCount} />}
            </Counter>
        </>
    );
}

export default App;

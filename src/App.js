/* eslint-disable no-unused-vars */
import Bracket from './component/composition/Bracket';
import Emoji from './component/composition/Emoji';
import Text from './component/composition/Text';

function App() {
    return (
        <Emoji>
            {({ addEmoji }) => (
                <Bracket>{({ bracket }) => <Text addEmoji={addEmoji} bracket={bracket} />}</Bracket>
            )}
        </Emoji>
    );
}

export default App;

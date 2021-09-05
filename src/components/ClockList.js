import Clock from './Clock';

function ClockList({ qunatities = [] }) {
    return (
        <div>
            {qunatities.map(() => (
                <Clock key={Math.random()} />
            ))}
        </div>
    );
}

export default ClockList;

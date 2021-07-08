import React, {useState} from 'react'

function Clicker() {
    const [counter, setCounter] = useState(0);

    const Increase = () => {
        setCounter(counter + 1);
    };

    const Decrease = () => {
        setCounter(counter - 1);
    };

    const toZero = () => {
        setCounter(0);
    };

    const toAHundred = () => {
        setCounter("Sike! you thought!");
    }

    return (
        <>
            <div className="first">
                <p>
                    Counter: {counter}
                </p>
                <button onClick={Increase}>Click to increase counter number</button>
                <button onClick={Decrease}>Click to decrease counter number</button>
                <button onClick={toAHundred}>Click to set counter to a hundred</button>
                <button onClick={toZero}>Click to reset counter</button>
                <div>Click Button to increase counter number</div>
            </div>
        </>
    )
}

export default Clicker

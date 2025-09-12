import React, { useState } from 'react';

const NavBar = () => {
    const [increment, setIncrement] = useState(0);

    const [decrement, SetDecrement] = useState(0);

    const [multiply, setMultiplied] = useState(1)

    // function should be inside NavBar
    const incremented = () => {
        setIncrement(increment + 1);
    };

    function decremented() {
        SetDecrement(decrement - 1);
    }

    function multiplied(){
        setMultiplied(multiply * 2)
    }

    return (
        <div>
            <h1>Current Value:</h1>
            <p>{increment}</p>
            <button onClick={incremented}>Click Me To Increase The NUMBER</button>

            <h1>Current Value:</h1>
            <p>{decrement}</p>
            <button onClick={decremented}>Click Me To Decrease The NUMBER</button>

            <h1>Current Value:</h1>
            <p>{multiply}</p>
            <button onClick={multiplied}>Click Me To Multiply With 2</button>
        </div>
    );
};

export default NavBar;

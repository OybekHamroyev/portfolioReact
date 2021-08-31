import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    const onIncrement=()=>{
        setCount(count+1)
    }
    const onDecrement=()=>{
        setCount(count-1)
    }
    return (
        <div>
            <button onClick={onIncrement}>+</button>
            <span>{count}</span>
            <button onClick={onDecrement}>-</button>
        </div>
    );
};

export default Counter;
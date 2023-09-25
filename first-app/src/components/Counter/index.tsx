import { useState } from 'react';
import './styles.css';

type Props = {
    title: string;
    initialValue?: number;
}

function Counter({ title, initialValue }: Props) {
    const [count, setCount] = useState(initialValue || 0);

    function handleChangeValue(value: number) {
        const nextValue = count + (value);

        if (nextValue < 0) {
            return;
        }

        setCount(nextValue);
    }

    return (
        <div className='container-counter'>
            <h1>{title}</h1>

            <div className='content-counter'>
                <h2>Current count: {count}</h2>
                <button onClick={() => handleChangeValue(1)}>Add</button>
                <button onClick={() => handleChangeValue(-1)}>Remove</button>
            </div>
        </div>
    )
}

export default Counter;
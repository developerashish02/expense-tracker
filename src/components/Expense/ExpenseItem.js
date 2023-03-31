import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import { useState } from 'react';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    function handleClick() {
        setTitle('Ashish');
    }

    return (
        <div className='expense-item'>

            <div className='expense-item__description'>
                <ExpenseDate date={props.date} />
                <h2>
                    {title}
                </h2>
                <div className='expense-item__price'>$ {props.amount}</div>
                <button onClick={handleClick}>click</button>
            </div>
        </div>
    )
}

export default ExpenseItem; 
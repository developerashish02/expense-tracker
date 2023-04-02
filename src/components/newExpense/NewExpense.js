
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const getNewExpense = (expense) => {
        const newExpense = {
            ...expense,
            id: Math.random(),
        }

        props.onGetNewExpense(newExpense)

    }

    const handleEditingForm = () => {
        setIsEditing(true);
    }

    const stopEditingForm = () => {
        setIsEditing(false)
    }

    return <div className="new-expense">
        {!isEditing && <button onClick={handleEditingForm} >Add Expense</button>}
        {isEditing && <ExpenseForm onGetNewExpense={getNewExpense} stopEditing={stopEditingForm} />}
    </div>
}

export default NewExpense;  
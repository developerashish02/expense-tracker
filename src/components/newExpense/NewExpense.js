
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {

    const getNewExpense = (expense) => {
        const newExpense = {
            ...expense,
            id: Math.random(),
        }

        props.onGetNewExpense(newExpense)

        // console.log(newExpense, "Got Expense")
    }

    return <div className="new-expense">
        <ExpenseForm onGetNewExpense={getNewExpense} />
    </div>
}

export default NewExpense;  
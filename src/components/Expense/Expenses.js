import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'

function Expenses(props) {
    const [expenseYear, setExpenseYear] = useState(2023);
    const getSelectedYear = expenseYear => {
        setExpenseYear(expenseYear);
        console.log(expenseYear, "Task done")
    }
    return (
        <div className='expenses'>
            <ExpensesFilter onGetSelectedYear={getSelectedYear} />
            <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} id={props.expenses[0].id} >  </ExpenseItem>
            <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} id={props.expenses[1].id}>  </ExpenseItem>
            <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} id={props.expenses[2].id}>  </ExpenseItem>
        </div>
    )
}

export default Expenses

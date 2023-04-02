import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'

function Expenses(props) {
    const [expenseYear, setExpenseYear] = useState("2023");

    const getSelectedYear = expenseYear => {
        setExpenseYear(expenseYear);
    }

    const filterExpense = props.expenses.filter(expense => expense.date.getFullYear().toString() === expenseYear)

    let filterMessage = <p>No Expense Found...</p>;

    if (filterExpense.length > 0) {
        filterMessage = filterExpense.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />)
    }

    return (
        <div className='expenses'>
            <ExpensesFilter onGetSelectedYear={getSelectedYear} selected={expenseYear} />
            {filterMessage}
        </div>
    )
}

export default Expenses

import React, { useState } from 'react'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList';

function Expenses(props) {
    const [expenseYear, setExpenseYear] = useState("2023");

    const getSelectedYear = expenseYear => {
        setExpenseYear(expenseYear);
    }

    const filterExpense = props.expenses.filter(expense => expense.date.getFullYear().toString() === expenseYear)

    return (
        <div className='expenses'>
            <ExpensesFilter onGetSelectedYear={getSelectedYear} selected={expenseYear} />
            <ExpensesList items={filterExpense} />
        </div>
    )
}

export default Expenses

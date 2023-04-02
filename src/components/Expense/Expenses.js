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

    return (
        <div className='expenses'>
            <ExpensesFilter onGetSelectedYear={getSelectedYear} selected={expenseYear} />
            {
              filterExpense.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />)
            }

        </div>
    )
}

export default Expenses

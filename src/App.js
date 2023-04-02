
import { useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/newExpense/NewExpense'
// import NewExpense from './components/newExpense/NewExpense';

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [expenses, seEexpenses] = useState(DUMMY_EXPENSE)

  const getNewExpense = (expense) => {
    const newExpense = {
      ...expense
    }


    seEexpenses((prevState) => {
      return [newExpense, ...prevState]
    })

    console.log(expenses)

  }
  return (
    <div className="App">
      <NewExpense onGetNewExpense={getNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

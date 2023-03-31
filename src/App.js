
import './App.css';
import ExpenseItem from './components/Expense/ExpenseItem';
import NewExpense from './components/newExpense/NewExpense';


const expenses = [
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
  return (
    <div className="App">
      <NewExpense />
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} id={expenses[0].id} >  </ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} id={expenses[1].id}>  </ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} id={expenses[2].id}>  </ExpenseItem>
    </div>
  );
}

export default App;

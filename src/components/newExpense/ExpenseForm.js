import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // const [title, setTitle] = useState('');
  // const [amount, setAmount] = useState('');
  const [showForm, SetshowForm] = useState(false);

  const [userInput, setUserinput] = useState({
    title: '',
    amount: '',
    date: ''
  })

  const handleTitle = (event) => {
    // setTitle(event.target.value);
    // setUserinput({
    //   ...userInput,
    //   title: event.target.value
    // })

    setUserinput((prevState) => {
      return { ...prevState, title: event.target.value }
    })
  }

  const handleAmount = (event) => {
    // op[tion : 1
    // setAmount(event.target.value);

    // option 2
    // setUserinput({
    //   ...userInput,
    //   amount: event.target.value
    // })

    // option 3 
    // Note : any situation we depend on previous state use this version
    setUserinput((prevState) => {
      return { ...prevState, amount: event.target.value }
    })


  }

  const handleDate = (event) => {
    // setUserinput({
    //   ...userInput,
    //   date: event.target.value
    // })
    // setDate(event.target.value)
    setUserinput((prevState) => {
      return { ...prevState, date: event.target.value }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date)
    }

    props.onGetNewExpense(expenseData);

    setUserinput({
      title: '',
      amount: '',
      date: ''
    })

    SetshowForm(false);
  }

  const handleFormContent = () => {
    SetshowForm(true);
  }

  const handleCancelForm = () => {
    SetshowForm(false);
  }
  return <div>
    {showForm && <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className='new-expense__control'>
          <label > Title </label>
          <input type="text" onChange={handleTitle} value={userInput.title} />

        </div>
        <div className='new-expense__control'>
          <label > Amount </label>
          <input type="number" onChange={handleAmount} value={userInput.amount} />

        </div>
        <div className='new-expense__control'>
          <label > Date </label>
          <input type="date" onChange={handleDate} value={userInput.date} />
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
        <button type='submit' onClick={handleCancelForm}>Cancel</button>
      </div>
    </form>}

    {!showForm && <div className='new-expense__actions show-form'>
      <button type='button' onClick={handleFormContent} >Add Expense</button>
    </div>}
  </div>
}

export default ExpenseForm; 
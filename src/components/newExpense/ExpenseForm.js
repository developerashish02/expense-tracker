import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  // const [title, setTitle] = useState('');
  // const [amount, setAmount] = useState('');
  // const [date, setDate] = useState('');

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
    console.log(userInput, "in")
  }
  return <form onSubmit={handleSubmit}>
    <div className="new-expense__controls">
      <div className='new-expense__control'>
        <label > Title </label>
        <input type="text" onChange={handleTitle} />

      </div>
      <div className='new-expense__control'>
        <label > Amount </label>
        <input type="number" onChange={handleAmount} />

      </div>
      <div className='new-expense__control'>
        <label > Date </label>
        <input type="date" onChange={handleDate} />
      </div>
    </div>

    <div className='new-expense__actions'>
      <button type='submit'>Add Expense</button>
    </div>
  </form>
}

export default ExpenseForm; 
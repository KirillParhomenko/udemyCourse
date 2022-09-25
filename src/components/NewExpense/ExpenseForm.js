import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expenseData, setExpenseData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const changeTitleData = (event) => {
    setExpenseData((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const changeAmountData = (event) => {
    setExpenseData((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const changeDateData = (event) => {
    setExpenseData((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.newExpenseData(expenseData);
    setExpenseData((prevState) => {
      return { ...prevState, title: "", amount: "", date: "" };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={expenseData.title}
            onChange={changeTitleData}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={expenseData.amount}
            onChange={changeAmountData}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={expenseData.date}
            onChange={changeDateData}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;

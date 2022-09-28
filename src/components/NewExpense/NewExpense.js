import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const newExpenseData = (expenseData) => {
    props.pushNewExpense({ ...expenseData, date: new Date(expenseData.date) });
  };

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          newExpenseData={newExpenseData}
          toggleEditing={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

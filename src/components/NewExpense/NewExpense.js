import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const newExpenseData = (expenseData) => {
    props.pushNewExpense({ ...expenseData, date: new Date(expenseData.date) });
  };

  return (
    <div className="new-expense">
      <ExpenseForm newExpenseData={newExpenseData} />
    </div>
  );
};

export default NewExpense;

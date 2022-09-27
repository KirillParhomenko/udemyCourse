import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter.js";

import "./Expenses.css";

function Expenses(props) {
  const [selectedYearFilter, setSelectedYearFilter] = useState("2021");

  const filterChangeHandler = (changedDate) => {
    setSelectedYearFilter(changedDate);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYearFilter}
        onChangeYearFilter={filterChangeHandler}
      />
      {props.items
        .filter((expense) => expense.date.getFullYear() == selectedYearFilter)
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
}

export default Expenses;

import { useState } from "react";
import ChartData from "../Chart/ChartData.js";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter.js";

import "./Expenses.css";

function Expenses(props) {
  const [selectedYearFilter, setSelectedYearFilter] = useState("2021");

  const expensesFiltered = props.items.filter(
    (expense) => expense.date.getFullYear() == selectedYearFilter
  );

  const filterChangeHandler = (changedDate) => {
    setSelectedYearFilter(changedDate);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYearFilter}
        onChangeYearFilter={filterChangeHandler}
      />
      <ChartData expenseData={expensesFiltered} />
      <ExpensesList items={expensesFiltered} />
    </Card>
  );
}

export default Expenses;

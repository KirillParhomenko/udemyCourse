import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter.js";

import "./Expenses.css";

function Expenses(props) {
  const [selectedYearFilter, setSelectedYearFilter] = useState('2021');

  const filterChangeHandler = (changedDate) => {
    setSelectedYearFilter(changedDate);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={selectedYearFilter} onChangeYearFilter={filterChangeHandler}/>
      <ExpenseItem
        date={props.items[0].date}
        title={props.items[0].title}
        amount={props.items[0].amount}
      />
      <ExpenseItem
        date={props.items[1].date}
        title={props.items[1].title}
        amount={props.items[1].amount}
      />
      <ExpenseItem
        date={props.items[2].date}
        title={props.items[2].title}
        amount={props.items[2].amount}
      />
    </Card>
  );
}

export default Expenses;

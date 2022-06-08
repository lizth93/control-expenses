import Card from "../Card";
import ExpensesFilter from "../../components/NewExpense/ExpensesFilter";
import "../../css/Expenses.css";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "../Expenses/ExpensesList.js";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};
export default Expenses;

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "testing car",
    amount: 297,
    date: new Date(2022, 6, 6),
  },

  {
    id: 2,
    title: "house",
    amount: 300,
    date: new Date(2022, 6, 10),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  console.log("expenses", expenses);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

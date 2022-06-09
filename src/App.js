import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);

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

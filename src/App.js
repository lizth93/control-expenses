import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      title: "testing car",
      amount: 297,
      date: new Date(2022, 6, 6),
    },

    {
      title: "house",
      amount: 300,
      date: new Date(2022, 6, 10),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense, "this is the data trhow the function");
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

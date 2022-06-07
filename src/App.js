import Expenses from "./components/Expenses";

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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

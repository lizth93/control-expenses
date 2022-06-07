import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "../css/Expenses.css";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.items[0].date}
        title={props.items[0].title}
        amount={props.items[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.items[1].date}
        title={props.items[1].title}
        amount={props.items[1].amount}
      ></ExpenseItem>
    </Card>
  );
};
export default Expenses;

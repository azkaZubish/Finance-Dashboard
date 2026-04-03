import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const SummaryCards = () => {
  const { transactions } = useContext(AppContext);

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income - expense;

  return (
    <div>
      <div>Total Balance: {balance}</div>
      <div>Income: {income}</div>
      <div>Expenses: {expense}</div>
      <div>Transactions: {transactions.length}</div>
    </div>
  );
};

export default SummaryCards;
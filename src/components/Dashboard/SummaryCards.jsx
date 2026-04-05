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
    <div className="grid grid-cols-4 gap-4">

      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <p className="text-gray-500 text-sm">Total Balance</p>
        <h3 className="text-lg font-semibold">{balance}</h3>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <p className="text-gray-500 text-sm">Income</p>
        <h3 className="text-green-600 font-semibold">{income}</h3>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <p className="text-gray-500 text-sm">Expenses</p>
        <h3 className="text-red-500 font-semibold">{expense}</h3>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <p className="text-gray-500 text-sm">Transactions</p>
        <h3 className="font-semibold">{transactions.length}</h3>
      </div>

    </div>
  );
};

export default SummaryCards;
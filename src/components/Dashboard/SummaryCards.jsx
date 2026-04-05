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

      <div className="bg-gray border border-gray-200 rounded-2xl shadow-sm p-1">
        <div className="bg-white border border-gray-100 rounded-xl p-4">
          <p className="font-semibold text-gray-600 mb-4">Total Balance</p>
          <h3 className="text-lg font-semibold">{balance}</h3>
        </div>
      </div>

      <div className="bg-gray border border-gray-200 rounded-2xl shadow-sm p-1">
        <div className="bg-white border border-gray-100 rounded-xl p-4">
          <p className="font-semibold text-gray-600 mb-4">Income</p>
          <h3 className="text-green-600 font-semibold">{income}</h3>
        </div>
      </div>

      <div className="bg-gray border border-gray-200 rounded-2xl shadow-sm p-1">
        <div className="bg-white border border-gray-100 rounded-xl p-4">
          <p className="font-semibold text-gray-600 mb-4">Expenses</p>
          <h3 className="text-red-500 font-semibold">{expense}</h3>
        </div>
      </div>

      <div className="bg-gray border border-gray-200 rounded-2xl shadow-sm p-1">
        <div className="bg-white border border-gray-100 rounded-xl p-4">
          <p className="font-semibold text-gray-600 mb-4">Transactions</p>
          <h3 className="font-semibold">{transactions.length}</h3>
        </div>
      </div>

    </div>
  );
};

export default SummaryCards;
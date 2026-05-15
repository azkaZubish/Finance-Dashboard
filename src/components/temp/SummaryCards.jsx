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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

      <div className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-2">

        <div className="bg-purple-500 border border-gray-100 rounded-xl p-2">
          <p className="text-white font-semibold text-gray-600 mb-4">
            Total Balance
          </p>
        </div>

        <h3 className="text-lg font-semibold text-gray-600 px-2">
          ₹{balance}
        </h3>

      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-2">
        <div className="bg-white border border-gray-100 rounded-xl p-2">
          <p className="font-semibold text-gray-600 mb-4">Income</p>
        </div>
        <h3 className="text-lg text-green-600 font-semibold px-2">{income}</h3>

      </div>

      <div className="bg-gray border border-gray-200 rounded-2xl shadow-sm p-2">
        <div className="bg-purple-500 border border-gray-100 rounded-xl p-2">
          <p className="text-white font-semibold text-gray-600 mb-4">Expenses</p>
        </div>
        <h3 className="text-lg text-red-500 font-semibold px-2">{expense}</h3>

      </div>

      <div className="bg-gray border border-gray-200 rounded-2xl shadow-sm p-2">
        <div className="bg-white border border-gray-100 rounded-xl p-2">
          <p className="font-semibold text-gray-600 mb-4">Transactions</p>
        </div>
        <h3 className="text-lg font-semibold px-2">{transactions.length}</h3>

      </div>

    </div>
  );
};

export default SummaryCards;
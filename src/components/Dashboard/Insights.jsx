import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Insights = () => {
  const { transactions, globalSearch } = useContext(AppContext);

  const globalFiltered = transactions.filter((t) => {
    const query = globalSearch.toLowerCase();

    return (
      t.category.toLowerCase().includes(query) ||
      t.type.toLowerCase().includes(query) ||
      t.amount.toString().includes(query)
    );
  });

  const expenseMap = {};

  globalFiltered.forEach((t) => {
    if (t.type === "expense") {
      if (!expenseMap[t.category]) {
        expenseMap[t.category] = 0;
      }
      expenseMap[t.category] += t.amount;
    }
  });

  let highestCategory = "";
  let max = 0;
  let hasExpenses = false;

  if (Object.keys(expenseMap).length > 0) {
    hasExpenses = true;
    for (let key in expenseMap) {
      if (expenseMap[key] > max) {
        max = expenseMap[key];
        highestCategory = key;
      }
    }
  }


  const monthlyData = {};

  transactions.forEach((t) => {
    const month = t.date.slice(0, 7);

    if (!monthlyData[month]) {
      monthlyData[month] = { income: 0, expense: 0 };
    }

    if (t.type === "income") {
      monthlyData[month].income += t.amount;
    } else {
      monthlyData[month].expense += t.amount;
    }
  });

  const months = Object.keys(monthlyData).sort();

  let expenseChange = null;
  let lastMonth = null;
  let prevMonth = null;

  if (months.length >= 2) {
    lastMonth = monthlyData[months[months.length - 1]];
    prevMonth = monthlyData[months[months.length - 2]];

    if (prevMonth && lastMonth) {
      expenseChange = lastMonth.expense - prevMonth.expense;
    }

  }

  if (transactions.length === 0) {
    return <p>No insights available</p>;
  }

  return (
    <div className="bg-gray-100 border border-gray-200 rounded-2xl shadow-sm p-1 flex flex-col h-full ">


      <div className="bg-white border border-gray-100 rounded-xl p-2  sm:p-3 flex flex-col mb-1">

        <h3 className="font-semibold text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
          Insights
        </h3>
      </div>
      <div className="bg-white border border-gray-100 rounded-xl p-2 sm:p-3 flex flex-col flex-1">

        <div className="flex flex-col flex-1 justify-between text-sm mt-1">

          {/* Top Category */}
          <div className="flex justify-between items-start p-3 rounded-lg hover:bg-gray-50 transition">
            <div>
              <p className="text-md text-gray-400 mb-1">Top Category</p>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-lg font-medium">
                {hasExpenses ? highestCategory : "No data"}
              </span>
            </div>
          </div>

          {/* Expense Change */}
          <div className="flex justify-between items-start p-3 rounded-lg hover:bg-gray-50 transition">
            <div>
              <p className="text-md text-gray-400 mb-1">Expense Change</p>
              <p
                className={`font-semibold ${expenseChange > 0
                  ? "text-red-500"
                  : expenseChange < 0
                    ? "text-green-600"
                    : "text-gray-500"
                  }`}
              >
                {expenseChange !== null ? `₹${expenseChange}` : "Not enough data"}
              </p>
            </div>
          </div>

          {/* Status */}
          <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50">
            <span className="text-md text-gray-500">Status</span>

            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${expenseChange > 0
                ? "bg-red-100 text-red-600"
                : "bg-green-100 text-green-600"
                }`}
            >
              {expenseChange > 0 ? "Spending Increased" : "Stable / Improved"}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Insights;
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
    <div className="bg-gray border border-gray-200 rounded-2xl shadow-sm p-1">
      <div className="bg-white border border-gray-100 rounded-xl p-4">
        <h3 className="font-semibold text-gray-600 mb-4">Insights</h3>

        <div className="space-y-2 text-sm">

          <p>Highest Spending Category: {' '}
            {hasExpenses ? highestCategory : 'No expense Data'}
          </p>


          <p>
            Expense Change: {' '}
            {expenseChange !== null
              ? `₹${expenseChange}`
              : 'Not enough data to display Expense Change'}
          </p>

        </div>

      </div>
    </div>
  );
};

export default Insights;
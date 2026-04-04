import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Insights = () => {
  const { transactions } = useContext(AppContext);

  const expenseMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      if (!expenseMap[t.category]) {
        expenseMap[t.category] = 0;
      }
      expenseMap[t.category] += t.amount;
    }
  });

  let highestCategory = "";
  let max = 0;

  for (let key in expenseMap) {
    if (expenseMap[key] > max) {
      max = expenseMap[key];
      highestCategory = key;
    }
  }

  const monthlyData = {};

  transactions.forEach((t) => {
    const month = t.date.slice(0, 7); // "2026-04"

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

  const lastMonth = monthlyData[months[months.length - 1]];
  const prevMonth = monthlyData[months[months.length - 2]];

  return (
    <div>
      <h3>Insights</h3>

      <p>Highest Spending Category: {highestCategory}</p>

      {lastMonth && prevMonth && (
        <p>
          Expense Change: ₹
          {lastMonth.expense - prevMonth.expense}
        </p>
      )}
    </div>
  );
};

export default Insights;
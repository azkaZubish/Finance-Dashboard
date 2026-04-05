import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const TimeChart = () => {
  const { transactions, globalSearch } = useContext(AppContext);

  const globalFiltered = transactions.filter((t) => {
    const query = globalSearch.toLowerCase();

    return (
      t.category.toLowerCase().includes(query) ||
      t.type.toLowerCase().includes(query) ||
      t.amount.toString().includes(query)
    );
  });

  const groupedData = {};

  globalFiltered.forEach(t => {
    if (!groupedData[t.date]) {
      groupedData[t.date] = { date: t.date, income: 0, expense: 0 }
    }

    if (t.type === 'income') {
      groupedData[t.date].income += t.amount;
    }
    else {
      groupedData[t.date].expense += t.amount;
    }
  });

  const data = Object.values(groupedData);

  if (data.length === 0) {
    return <p>No data to display</p>;
  }

  return (
    <div className="bg-gray border border-gray-200 rounded-2xl shadow-sm p-1">
      <div className="bg-white border border-gray-100 rounded-xl p-4">
        <h3 className="font-semibold text-gray-600 mb-4">
          Time Based Visualization
        </h3>

        <div className="h-[300px]">
          <LineChart width={500} height={300} data={data}>
            <CartesianGrid />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Line type="monotone" dataKey="income" />
            <Line type="monotone" dataKey="expense" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default TimeChart;
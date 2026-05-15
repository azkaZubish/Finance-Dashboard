import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import {
  ResponsiveContainer,
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

        <div className="h-[220px] sm:h-[260px] md:h-[300px]">
          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#6B7280" }}
                axisLine={false}
                tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "#6B7280" }}
                axisLine={false}
                tickLine={false} />
              <Tooltip contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                border: "1px solid #E5E7EB",
              }}
                labelStyle={{ color: "#374151", fontWeight: "500" }} />
              <Legend
                wrapperStyle={{ fontSize: "12px", color: "#6B7280" }}
              />

              {/* Income Line */}
              <Line
                type="monotone"
                dataKey="income"
                stroke="#6366F1"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 5 }}
              />

              {/* Expense Line */}
              <Line
                type="monotone"
                dataKey="expense"
                stroke="#EF4444"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TimeChart;
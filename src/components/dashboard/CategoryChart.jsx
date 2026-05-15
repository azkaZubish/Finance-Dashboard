import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import {
    PieChart,
    Pie,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const CategoryChart = () => {
    const { transactions = [], globalSearch } = useContext(AppContext);

    const globalFiltered = transactions.filter((t) => {
        const query = globalSearch.toLowerCase();

        return (
            t.category.toLowerCase().includes(query) ||
            t.type.toLowerCase().includes(query) ||
            t.amount.toString().includes(query)
        );
    });

    const categoryData = {};

    globalFiltered.forEach((t) => {
        if (t.type === "expense") {
            categoryData[t.category] =
                (categoryData[t.category] || 0) + t.amount;
        }
    });

    const data = Object.keys(categoryData).map((key) => ({
        name: key,
        value: categoryData[key],
    }));

    const COLORS = [
        "#6366F1",
        "#22C55E",
        "#F59E0B",
        "#EF4444",
        "#3B82F6",
        "#A855F7",
    ];

    const sortedData = data
        .sort((a, b) => b.value - a.value)
        .map((item, index) => ({
            ...item,
            fill: COLORS[index % COLORS.length],
        }));

    const total = sortedData.reduce((sum, d) => sum + d.value, 0);


    return (
        <div className="bg-gray-100 border border-gray-200 rounded-2xl shadow-sm p-1">
            <div className="bg-white border border-gray-100 rounded-xl p-4">

                <h3 className="font-semibold text-gray-600 mb-4">
                    Category Breakdown
                </h3>

                <div className="w-full flex justify-center">

                    {sortedData.length === 0 ? (
                        <p className="text-sm text-gray-400">
                            No expense data available
                        </p>
                    ) : (
                        <ResponsiveContainer width="100%" height="100%">

                            <PieChart>

                                <defs>
                                    <linearGradient id="pieGradient" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#6366F1" />
                                        <stop offset="100%" stopColor="#8B5CF6" />
                                    </linearGradient>
                                </defs>

                                <Pie
                                    data={sortedData}
                                    dataKey="value"
                                    nameKey="name"
                                    innerRadius={70}
                                    outerRadius={110}
                                    paddingAngle={3}
                                    cornerRadius={10}
                                    fill="url(#pieGradient)"  
                                    stroke="#fff"
                                    strokeWidth={2}
                                />

                                <text
                                    x="50%"
                                    y="50%"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fill="#111827"
                                    fontSize={18}
                                    fontWeight={600}
                                >
                                    ₹{total}
                                </text>

                                <Tooltip
                                    formatter={(value) => `₹${value}`}
                                    contentStyle={{
                                        backgroundColor: "#fff",
                                        borderRadius: "12px",
                                        border: "1px solid #E5E7EB",
                                        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                                    }}
                                />

                                <Legend
                                    verticalAlign="bottom"
                                    align="center"
                                    wrapperStyle={{
                                        fontSize: "12px",
                                    }}
                                />

                            </PieChart>

                        </ResponsiveContainer>

                    )}

                </div>
            </div>
        </div>
    );
};

export default CategoryChart;
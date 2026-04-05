import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";

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

    (globalFiltered).forEach((t) => {
        if (t.type === "expense") {
            if (!categoryData[t.category]) {
                categoryData[t.category] = 0;
            }
            categoryData[t.category] += t.amount;
        }
    });


    const data = Object.keys(categoryData).map(key => {
        return {
            name: key,
            value: categoryData[key],
        }
    });

    // if (data.length === 0) {
    //     return <div>No expense data available</div>;
    // }

    return (
        <div className="bg-gray border border-gray-200 rounded-2xl shadow-sm p-1">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
                <div style={{ width: "100%" }}>
                    <h3 className="font-semibold text-gray-600 mb-4">
                        Category Breakdown
                    </h3>

                    <div className="h-[300px]">
                        {data.length === 0 ? 'No expense Data Available' : (
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={data}
                                        dataKey="value"
                                        nameKey="name"
                                        outerRadius={100}
                                    />
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        )}

                    </div>

                </div>
            </div>
        </div>
    );
};
export default CategoryChart;
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
        <div style={{ width: "100%" }} className="bg-white p-4 rounded-xl shadow-sm border">
            <h3 className="text-sm text-gray-500 mb-2">
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
    );
};
export default CategoryChart;
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from "recharts";

const CategoryChart = () => {
    const { transactions = [] } = useContext(AppContext);

    const categoryData = {};

    (transactions || []).forEach((t) => {
        if (t.type === "expense") {
            if (!categoryData[t.category]) {
                categoryData[t.category] = 0;
            }
            categoryData[t.category] += t.amount;
        }
    });


    const data = Object.keys(categoryData).map(key => {
       return { name: key,
        value: categoryData[key],}
    });

     if (data.length === 0) {
        return <div>No expense data available</div>;
    }

    return (
        <div style={{ width: "100%" }}>
            <h3>Category Based Visualization</h3>
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
        </div>
    );
};
export default CategoryChart;
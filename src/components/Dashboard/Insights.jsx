import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Insights = () => {
  const { transactions } = useContext(AppContext);
 
  return (
    <div>
      <h3>Insights</h3>
      <p>Basic insights will go here</p>
    </div>
  );
};

export default Insights;
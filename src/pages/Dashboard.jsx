import Navbar from "../components/layout/Navbar";
import HeaderActions from "../components/layout/HeaderActions";
import SummaryCards from "../components/dashboard/SummaryCards";
import TimeChart from "../components/dashboard/TimeChart";
import CategoryChart from "../components/dashboard/CategoryChart";
import Transactions from "../components/dashboard/Transactions";
import Insights from "../components/dashboard/Insights";

const Dashboard = () => {
  
  return (
    <div>
      <Navbar />
      <HeaderActions />

      <SummaryCards />

      <div>
        <TimeChart />
        <Transactions />
      </div>

      <div>
        <Insights />
        <CategoryChart />
      </div>
    </div>
  );
};

export default Dashboard;
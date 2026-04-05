import Navbar from "../components/layout/Navbar";
import HeaderActions from "../components/layout/HeaderActions";
import SummaryCards from "../components/dashboard/SummaryCards";
import TimeChart from "../components/dashboard/TimeChart";
import CategoryChart from "../components/dashboard/CategoryChart";
import Transactions from "../components/dashboard/transactions/Transactions";
import Insights from "../components/dashboard/Insights";

const Dashboard = () => {

  return (
    <div className="bg-[#F6F7FB] min-h-screen p-6">
      <div className="flex min-h-screen bg-gray-50">

        <div className="flex-1 p-6 space-y-6">
          <Navbar />
          <HeaderActions />

          <SummaryCards />

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <TimeChart />
            </div>
            <div>
              <Transactions />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Insights />
            <CategoryChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
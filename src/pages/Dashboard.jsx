import Navbar from "../components/layout/Navbar";
import HeaderActions from "../components/layout/HeaderActions";
import SummaryCards from "../components/dashboard/SummaryCards";
import TimeChart from "../components/dashboard/TimeChart";
import CategoryChart from "../components/dashboard/CategoryChart";
import Transactions from "../components/dashboard/transactions/Transactions";
import Insights from "../components/dashboard/Insights";

const Dashboard = () => {

  return (
    <div>
    <Navbar />
    <div className="bg-[#F6F7FB] min-h-screen px-3 sm:px-4 md:px-6 pt-2 py-4 space-y-4 md:space-y-6">
      <div className="flex min-h-screen bg-gray-50">

        <div className="flex-1 p-6 pt-4 space-y-6">
          
          <HeaderActions />

          <SummaryCards />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6">
            <div className="lg:col-span-2">
              <TimeChart />
            </div>
            <div className="h-[350px] lg:h-full lg:col-span-3 flex flex-col">
              <Transactions />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Insights />
            <CategoryChart />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
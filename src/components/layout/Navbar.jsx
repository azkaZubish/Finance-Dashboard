import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const { globalSearch, setGlobalSearch } = useContext(AppContext);

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border">
      <h2 className="text-xl font-semibold">Finance Dashboard</h2>

      <div className="flex items-center gap-4">

        <input
          className="border px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Search..."
          value={globalSearch}
          onChange={e => setGlobalSearch(e.target.value)}
        />

        <button className="px-3 py-2 bg-gray-100 rounded-lg">
          🌙
        </button>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default Navbar;
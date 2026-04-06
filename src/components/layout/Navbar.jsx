import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const { globalSearch, setGlobalSearch } = useContext(AppContext);

  return (
    <div className="w-full flex flex-col bg-white p-4 border-b border-gray-200">

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-semibold text-gray-800 tracking-tight">
          Finance Dashboard
        </h2>

        <div className="flex items-center gap-3">

          <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-purple-500 transition">
            <input
              type="text"
              placeholder="Search"
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              className="bg-transparent outline-none text-sm w-40 placeholder-purple-500"
            />
          </div>

        
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-700"></div>
        </div>
      </div>

  
    </div>
  );
};

export default Navbar;
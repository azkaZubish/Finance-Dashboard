import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import handleExportCSV from "../../utils/export";

const HeaderActions = () => {
  const { role, setRole, transactions } = useContext(AppContext);

  return (
    <div className="flex justify-between items-center">
      <select value={role} onChange={(e) => setRole(e.target.value)} className="bg-white border border-gray-200 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 outline-none text-gray-600">
        <option value="viewer" className="font-semibold text-mist-50">Viewer</option>
        <option value="admin">Admin</option>
      </select>

      <button onClick={() => handleExportCSV(transactions)} className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition"> <p className="font-semibold text-mist-50">Export CSV</p></button>
    </div>
  );
};

export default HeaderActions;
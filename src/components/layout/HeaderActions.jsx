import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import handleExportCSV from "../../utils/export";

const HeaderActions = () => {
  const { role, setRole, transactions } = useContext(AppContext);

  return (
    <div>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="viewer" className="font-semibold text-mist-50">Viewer</option>
        <option value="admin">Admin</option>
      </select>

      <button onClick={() => handleExportCSV(transactions)} className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition"> <p className="font-semibold text-mist-50">Export CSV</p></button>
    </div>
  );
};

export default HeaderActions;
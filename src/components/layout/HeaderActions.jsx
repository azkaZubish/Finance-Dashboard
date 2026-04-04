import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import handleExportCSV from "../../utils/export";

const HeaderActions = () => {
  const { role, setRole, transactions } = useContext(AppContext);

  return (
    <div>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>

      <button onClick={() => handleExportCSV(transactions)}>Export CSV</button>
    </div>
  );
};

export default HeaderActions;
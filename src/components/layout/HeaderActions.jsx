import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const HeaderActions = () => {
  const { role, setRole } = useContext(AppContext);

  return (
    <div>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>

      <button>Download</button>
    </div>
  );
};

export default HeaderActions;
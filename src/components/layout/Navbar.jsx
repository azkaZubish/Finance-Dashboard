import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const {globalSearch, setGlobalSearch} = useContext(AppContext);

  return (
    <div>
      <h2>Finance Dashboard</h2>

      <div>

        <input 
        placeholder="Search..."
        value={globalSearch}
        onChange={e => setGlobalSearch(e.target.value)} 
        />

        <button>Dark Mode</button>
        <button>Profile</button>
      </div>
    </div>
  );
};

export default Navbar;
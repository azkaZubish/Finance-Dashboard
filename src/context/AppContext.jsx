import { createContext, useState } from "react";
import { transactions as initialData } from "../data/dummyData";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [transactions, setTransactions] = useState(initialData);
    const [role, setRole] = useState('viewer');
    const [filters, setFilters] = useState({});
    const [globalSearch, setGlobalSearch] = useState("");

    return(
        <AppContext.Provider value = {{
            transactions,
            setTransactions,
            role,
            setRole,
            filters,
            setFilters,
            globalSearch,
            setGlobalSearch,
        }}>
            {children}
        </AppContext.Provider>
    )
};
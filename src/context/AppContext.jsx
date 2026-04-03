import { useContext, useState } from "react";
import { transactions as initialData } from "../data/dummyData";

export const AppContext = useContext();

export const AppProvider = ({children}) => {
    const [transactions, setTransactions] = useState(initialData);
    const [role, setRole] = useState('viewer');
    const [filters, setFilters] = useState({});

    return(
        <AppContext.Provider value = {{
            transactions,
            setTransactions,
            role,
            setRole,
            filters,
            setFilters,
        }}>
            {children}
        </AppContext.Provider>
    )
};
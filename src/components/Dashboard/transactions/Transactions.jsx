import { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import TransactionModal from "./TransactionsModal";
import TransactionFilters from "./TransactionFilter";
import TransactionList from "./TransactionList";

const Transactions = () => {
    const { transactions = [], role, setTransactions, globalSearch } = useContext(AppContext);

    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("all");
    const [sortOrder, setSortOrder] = useState("latest");
    const [showModal, setShowModal] = useState(false);
    const [editingTransaction, setEditingTransaction] = useState(null);

    const globalFiltered = transactions.filter((t) => {
        const query = globalSearch.toLowerCase();

        return (
            t.category.toLowerCase().includes(query) ||
            t.type.toLowerCase().includes(query) ||
            t.amount.toString().includes(query)
        );
    });

    const filteredData = globalFiltered.filter((t) =>
        t.category.toLowerCase().includes(search.toLowerCase())
    );

    const typeFiltered =
        typeFilter === "all"
            ? filteredData
            : filteredData.filter((t) => t.type === typeFilter);

    const isFiltering = search || typeFilter !== "all";

    const sortedData = [...typeFiltered].sort((a, b) => {
        if (sortOrder === "latest") {
            return new Date(b.date) - new Date(a.date);
        } else {
            return new Date(a.date) - new Date(b.date);
        }
    });

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure?");
        if (!confirmDelete) return;

        const updated = transactions.filter((t) => t.id !== id);
        setTransactions(updated);
    };

    const handleEdit = (t) => {
        setEditingTransaction(t);
        setShowModal(true);
    };

    return (
        <div className="bg-gray border border-gray-200 rounded-2xl shadow-sm p-1  h-full flex flex-col">
            <div className="bg-white border border-gray-100 rounded-xl p-4  flex flex-col h-full">
                <h3 className="font-semibold text-gray-600 mb-4">Transactions</h3>

                <div className="flex gap-3 mb-3">
                    <TransactionFilters
                        search={search}
                        setSearch={setSearch}
                        typeFilter={typeFilter}
                        setTypeFilter={setTypeFilter}
                        sortOrder={sortOrder}
                        setSortOrder={setSortOrder}
                    />
                    <button onClick={() => setShowModal(true)} disabled={role !== "admin"} className="font-semibold border border-gray-200 px-2 py-2 rounded-lg text-sm">
                        +
                    </button>
                </div>


                {showModal && (
                    <TransactionModal
                        onClose={() => {
                            setShowModal(false);
                            setEditingTransaction(null);
                        }}
                        editingTransaction={editingTransaction}
                    />
                )}
                <div className="flex-1 overflow-y-auto mt-3 space-y-2">
                    <TransactionList
                        data={sortedData}
                        role={role}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        isFiltering={isFiltering}
                    />
                </div>
            </div>
        </div>
    );
};

export default Transactions;
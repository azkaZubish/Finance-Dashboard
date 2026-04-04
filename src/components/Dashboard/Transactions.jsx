import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import TransactionModal from "./TransactionModal";

const Transactions = () => {
  const { transactions = [], role, setTransactions } = useContext(AppContext);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("latest");
  const [showModal, setShowModal] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);

  const filteredData = transactions.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  const typeFiltered =
    typeFilter === "all"
      ? filteredData
      : filteredData.filter((t) => t.type === typeFilter);

  const sortedData = [...typeFiltered].sort((a, b) => {
    if (sortOrder === "latest") {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  const handleDelete = (id) => {
    const updated = transactions.filter((t) => t.id !== id);
    setTransactions(updated);
  };

  return (
    <div>
      <h3>Transactions</h3>

      {/* Search */}
      <input
        placeholder="Search category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filter */}
      <select onChange={(e) => setTypeFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* Sort */}
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
      </select>

      {role === 'admin' && (
        <button onClick={() => setShowModal(true)}>
          Add Transaction
        </button>
      )}

      {showModal && (
        <TransactionModal onClose={() => {
          setShowModal(false);
          setEditingTransaction(null);
        }}
          editingTransaction={editingTransaction}
        />
      )}

      {/* List */}
      <ul>
        {sortedData.map((t) => (
          <li key={t.id}>
            {t.date} - {t.category} - ₹{t.amount} ({t.type})
            {role === 'admin' && (
              <>
                <button onClick={() => {
                  setEditingTransaction(t);
                  setShowModal(true);
                }}>
                  Edit
                </button>
                <button onClick={() => handleDelete(t.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
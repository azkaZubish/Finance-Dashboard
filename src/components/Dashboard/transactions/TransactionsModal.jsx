import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../context/AppContext";

const TransactionModal = ({ onClose, editingTransaction }) => {
    const { transactions, setTransactions } = useContext(AppContext);

    const [form, setForm] = useState({
        date: "",
        amount: "",
        category: "",
        type: "expense",
    });

    useEffect(() => {
        if (editingTransaction) {
            setForm(editingTransaction);
        }
    }, [editingTransaction]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.date || !form.amount || !form.category) {
            alert("Please fill all fields");
            return;
        }
        if (form.amount <= 0) {
            alert("Amount must be greater than 0");
            return;
        }

        if (editingTransaction) {
            const updated = transactions.map(t => {
                return t.id === editingTransaction.id
                    ? { ...form, id: t.id, amount: Number(form.amount) }
                    : t
            })
            setTransactions(updated)
        } else {
            const newTransaction = {
                id: Date.now() + Math.random(),
                ...form,
                amount: Number(form.amount),
            };

            setTransactions([...transactions, newTransaction]);
        }
        onClose();
    };
    return (
        <>
            <div onClick={onClose}></div>

            <div>
                <h3>
                    {editingTransaction ? "Edit Transaction" : "Add Transaction"}
                </h3>

                <form onSubmit={handleSubmit}>
                    <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="amount"
                        placeholder="Amount"
                        value={form.amount}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={form.category}
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                    >
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>

                    <button type="submit">
                        {editingTransaction ? "Update" : "Add"}
                    </button>

                    <button type="button" onClick={onClose}>
                        Cancel
                    </button>
                </form>
            </div>
        </>
    )
}

export default TransactionModal;
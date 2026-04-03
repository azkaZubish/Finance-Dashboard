import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Transactions = () => {
  const { transactions } = useContext(AppContext);

  return (
    <div>
      <h3>Transactions</h3>

      <input placeholder="Search..." />

      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.date} - {t.category} - {t.amount} ({t.type})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
import TransactionItem from "./TransactionItem";

const TransactionList = ({ data, role, onEdit, onDelete, isFiltering }) => {
  if (data.length === 0) {
    return (
      <p>
        {isFiltering
          ? "No matching transactions"
          : "No transactions available"}
      </p>
    );
  }

  return (
    <ul>
      {data.map((t) => (
        <TransactionItem
          key={t.id}
          t={t}
          role={role}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TransactionList;
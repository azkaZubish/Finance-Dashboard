const TransactionItem = ({ t, role, onEdit, onDelete }) => {
  return (
    <li>
      {t.date} - {t.category} - ₹{t.amount} ({t.type})

      {role === "admin" && (
        <>
          <button onClick={() => onEdit(t)}>Edit</button>
          <button onClick={() => onDelete(t.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TransactionItem;
import { useState, useEffect } from "react";

const TransactionItem = ({ t, role, onEdit, onDelete }) => {

    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleClickOutside = () => setShowMenu(false);
        window.addEventListener("click", handleClickOutside);

        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <li className=" flex justify-between items-center gap-4 p-3 rounded-lg
             border-b border-purple-500
             hover:bg-gray-50
             transition
             hover:border hover:border-purple-400 mb-2">

            <div>
                <p className="text-sm font-medium text-gray-800">
                    {t.category}
                </p>
                <p className="text-xs text-gray-500">
                    {t.date}
                </p>
            </div>

            <div className="flex items-center gap-4">
                <div className="text-right">
                    <p
                        className={`text-sm font-semibold ${t.type === "expense"
                            ? "text-red-500"
                            : "text-green-600"
                            }`}
                    >
                        ₹{t.amount}
                    </p>

                    <p className="text-xs text-gray-400">
                        {t.type}
                    </p>
                </div>


                {role === "admin" && (
                    <div className="flex gap-2 ml-4">
                        <div className="relative">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowMenu(!showMenu);
                                }}
                                className="text-gray-500 hover:text-gray-700 text-lg"
                            >
                                ⋮
                            </button>
                            {showMenu && (
                                <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded-lg shadow-md z-10">
                                    <button
                                        onClick={() => {
                                            onEdit(t);
                                            setShowMenu(false);
                                        }}
                                        className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => {
                                            onDelete(t.id);
                                            setShowMenu(false);
                                        }}
                                        className="block w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-red-50"
                                    >
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </li>
    );
};

export default TransactionItem;
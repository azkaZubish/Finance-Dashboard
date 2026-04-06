const TransactionFilters = ({
    search,
    setSearch,
    typeFilter,
    setTypeFilter,
    sortOrder,
    setSortOrder,
}) => {
    return (
        <div className="flex flex-col sm:flex-row gap-2 w-full">
            {/* Search */}
            <input
                className="flex-1 border border-gray-200 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 outline-none w-full border placeholder-purple-500"
                placeholder="Search category"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Filter */}
            <select onChange={(e) => setTypeFilter(e.target.value)} className="bg-white border border-gray-200 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 outline-none text-gray-600 w-full sm:w-auto border px-2 py-2 rounded-lg text-sm w-full sm:w-auto border px-2 py-2 rounded-lg text-sm">
                <option value="all">All</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>

            {/* Sort */}
            <select onChange={(e) => setSortOrder(e.target.value)} className="bg-white border border-gray-200 px-3 py-2 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 outline-none text-gray-600 w-full sm:w-auto border px-2 py-2 rounded-lg text-sm">
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
            </select>
        </div>
    )
}

export default TransactionFilters;
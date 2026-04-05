const TransactionFilters = ({
    search,
    setSearch,
    typeFilter,
    setTypeFilter,
    sortOrder,
    setSortOrder,
}) => {
    return (
        <div>
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
        </div>
    )
}

export default TransactionFilters;
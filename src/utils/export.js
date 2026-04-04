
const handleExportCSV = (transactions) => {

    if (transactions.length === 0) {
        alert('No data to export');
        return;
    }
    const headers = ['Date', 'Category', 'Amount', 'Type'];

    const rows = transactions.map(t => [
        t.date,
        t.category,
        t.amount,
        t.type,
    ]);

    const csvContent = [
        headers.join(','),
        ...rows.map(row => row.join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'transactions.csv';

    link.click();

    window.URL.revokeObjectURL(url);

}

export default handleExportCSV;
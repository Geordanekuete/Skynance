import React from 'react';
import { Download, FileSpreadsheet, FileText } from 'lucide-react';
import { utils, writeFile } from 'xlsx';
import { jsPDF } from 'jspdf';

export function ExportOptions() {
  const exportToExcel = () => {
    const data = [
      ['Date', 'Category', 'Amount', 'Description'],
      ['2024-03-15', 'Food', 25.99, 'Lunch'],
      ['2024-03-14', 'Transport', 15.00, 'Bus fare'],
    ];

    const ws = utils.aoa_to_sheet(data);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Expenses');
    writeFile(wb, 'expenses.xlsx');
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text('Expense Report', 20, 10);
    doc.save('expenses.pdf');
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Download className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-semibold dark:text-white">Export Data</h2>
      </div>

      <div className="grid gap-4">
        <button
          onClick={exportToExcel}
          className="flex items-center gap-2 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <FileSpreadsheet className="w-5 h-5 text-green-600" />
          <div>
            <div className="font-medium dark:text-white">Export to Excel</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Download as .xlsx file</div>
          </div>
        </button>

        <button
          onClick={exportToPDF}
          className="flex items-center gap-2 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          <FileText className="w-5 h-5 text-red-600" />
          <div>
            <div className="font-medium dark:text-white">Export to PDF</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Download as .pdf file</div>
          </div>
        </button>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Plus, Minus, Users } from 'lucide-react';

interface Bill {
  description: string;
  amount: number;
  payers: string[];
}

export function BillSplitting() {
  const [bills, setBills] = useState<Bill[]>([]);
  const [newBill, setNewBill] = useState<Bill>({
    description: '',
    amount: 0,
    payers: ['You', 'Roommate 1']
  });

  const addBill = () => {
    if (newBill.description && newBill.amount > 0) {
      setBills([...bills, newBill]);
      setNewBill({ description: '', amount: 0, payers: ['You', 'Roommate 1'] });
    }
  };

  const calculateShare = (bill: Bill) => {
    return bill.amount / bill.payers.length;
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Users className="w-5 h-5 text-indigo-600" />
        <h2 className="text-lg font-semibold dark:text-white">Bill Splitting</h2>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Description
          </label>
          <input
            type="text"
            value={newBill.description}
            onChange={e => setNewBill({ ...newBill, description: e.target.value })}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Amount
          </label>
          <input
            type="number"
            value={newBill.amount}
            onChange={e => setNewBill({ ...newBill, amount: Number(e.target.value) })}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
          />
        </div>
        <button
          onClick={addBill}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          <Plus size={16} /> Add Bill
        </button>
      </div>

      <div className="space-y-4">
        {bills.map((bill, index) => (
          <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="font-medium dark:text-white">{bill.description}</span>
              <span className="text-indigo-600">${bill.amount}</span>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Each person pays: ${calculateShare(bill).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
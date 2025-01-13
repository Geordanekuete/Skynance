import React from 'react';
import { ShoppingBag, Coffee, Book, Bus } from 'lucide-react';

const expenses = [
  { id: 1, category: 'Shopping', amount: 45.99, date: '2024-03-15', icon: ShoppingBag },
  { id: 2, category: 'Coffee', amount: 4.50, date: '2024-03-15', icon: Coffee },
  { id: 3, category: 'Books', amount: 89.99, date: '2024-03-14', icon: Book },
  { id: 4, category: 'Transport', amount: 25.00, date: '2024-03-14', icon: Bus },
];

export function ExpenseList() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold">Recent Expenses</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {expenses.map((expense) => (
          <div key={expense.id} className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                <expense.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-medium">{expense.category}</div>
                <div className="text-sm text-gray-500">{expense.date}</div>
              </div>
            </div>
            <div className="font-semibold">${expense.amount.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
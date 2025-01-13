import React from 'react';
import { ExpenseList } from '../components/ExpenseList';

export function Expenses() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Expenses</h1>
      <ExpenseList />
    </div>
  );
}
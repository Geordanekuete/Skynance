import React from 'react';
import { ExpenseList } from './ExpenseList';
import { SpendingChart } from './SpendingChart';

export function DashboardContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
      <ExpenseList />
      <SpendingChart />
    </div>
  );
}
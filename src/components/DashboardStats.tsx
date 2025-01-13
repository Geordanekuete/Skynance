import React from 'react';
import { DashboardCard } from './DashboardCard';
import { Wallet, TrendingUp, PiggyBank, AlertCircle } from 'lucide-react';

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
      <DashboardCard
        title="Monthly Budget"
        value="$1,200.00"
        icon={<Wallet className="w-6 h-6" />}
        trend={{ value: "8%", positive: true }}
      />
      <DashboardCard
        title="Total Expenses"
        value="$847.50"
        icon={<TrendingUp className="w-6 h-6" />}
        trend={{ value: "2%", positive: false }}
      />
      <DashboardCard
        title="Savings"
        value="$352.50"
        icon={<PiggyBank className="w-6 h-6" />}
      />
      <DashboardCard
        title="Due Payments"
        value="$150.00"
        icon={<AlertCircle className="w-6 h-6" />}
      />
    </div>
  );
}
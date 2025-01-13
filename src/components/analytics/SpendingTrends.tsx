import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const trends = [
  { category: 'Food & Dining', amount: 250, change: 15, increasing: true },
  { category: 'Transportation', amount: 120, change: -8, increasing: false },
  { category: 'Books & Supplies', amount: 180, change: 5, increasing: true },
  { category: 'Entertainment', amount: 90, change: -12, increasing: false },
];

export function SpendingTrends() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Monthly Spending Trends</h2>
      <div className="space-y-4">
        {trends.map((trend) => (
          <div key={trend.category} className="flex items-center justify-between">
            <div>
              <div className="font-medium">{trend.category}</div>
              <div className="text-sm text-gray-500">${trend.amount}</div>
            </div>
            <div className={`flex items-center gap-1 ${trend.increasing ? 'text-red-500' : 'text-green-500'}`}>
              {trend.increasing ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              {Math.abs(trend.change)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
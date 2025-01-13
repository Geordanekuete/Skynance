import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', amount: 850 },
  { month: 'Feb', amount: 920 },
  { month: 'Mar', amount: 880 },
  { month: 'Apr', amount: 790 },
  { month: 'May', amount: 850 },
  { month: 'Jun', amount: 920 },
];

export function SpendingChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Monthly Spending Overview</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="amount" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
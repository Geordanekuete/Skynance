import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', actual: 850, predicted: 870 },
  { month: 'Feb', actual: 920, predicted: 900 },
  { month: 'Mar', actual: 880, predicted: 890 },
  { month: 'Apr', actual: null, predicted: 910 },
  { month: 'May', actual: null, predicted: 895 },
];

export function ExpensePrediction() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Expense Prediction</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="actual" name="Actual Spending" stroke="#4f46e5" strokeWidth={2} />
            <Line type="monotone" dataKey="predicted" name="Predicted Spending" stroke="#93c5fd" strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        Based on your spending patterns, we predict your expenses will stabilize around $900 for the next two months.
      </p>
    </div>
  );
}
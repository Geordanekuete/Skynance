import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { category: 'Books', current: 250, previous: 280 },
  { category: 'Food', current: 420, previous: 380 },
  { category: 'Transport', current: 180, previous: 200 },
  { category: 'Entertainment', current: 150, previous: 180 },
];

export function SemesterAnalysis() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Semester Comparison</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="current" name="Current Semester" fill="#4f46e5" />
            <Bar dataKey="previous" name="Previous Semester" fill="#93c5fd" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
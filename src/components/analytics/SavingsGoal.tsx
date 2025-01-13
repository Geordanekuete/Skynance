import React from 'react';

export function SavingsGoal() {
  const currentSavings = 850;
  const goalAmount = 1200;
  const progress = (currentSavings / goalAmount) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Savings Goal</h2>
      <div className="mb-2">
        <div className="flex justify-between mb-1">
          <span className="text-sm text-gray-500">Progress</span>
          <span className="text-sm font-medium">${currentSavings} / ${goalAmount}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-indigo-600 h-2.5 rounded-full" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        You're {Math.round(progress)}% of the way to your monthly savings goal!
      </p>
    </div>
  );
}
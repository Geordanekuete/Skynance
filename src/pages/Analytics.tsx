import React from 'react';
import { SpendingChart } from '../components/analytics/SpendingChart';
import { SemesterAnalysis } from '../components/analytics/SemesterAnalysis';
import { ExpensePrediction } from '../components/analytics/ExpensePrediction';
import { SpendingTrends } from '../components/analytics/SpendingTrends';
import { SavingsGoal } from '../components/analytics/SavingsGoal';

export function Analytics() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Analytics</h1>
      <div className="grid gap-6">
        <div className="grid md:grid-cols-2 gap-6">
          <SpendingChart />
          <SemesterAnalysis />
        </div>
        <ExpensePrediction />
        <div className="grid md:grid-cols-2 gap-6">
          <SpendingTrends />
          <SavingsGoal />
        </div>
      </div>
    </div>
  );
}
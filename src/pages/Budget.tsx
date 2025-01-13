import React from 'react';
import { BudgetCategories } from '../components/budget/BudgetCategories';
import { BudgetWizard } from '../components/budget/BudgetWizard';
import { BillSplitting } from '../components/budget/BillSplitting';

export function Budget() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">Budget Planner</h1>
      <div className="grid gap-6">
        <BudgetWizard />
        <div className="grid md:grid-cols-2 gap-6">
          <BudgetCategories />
          <BillSplitting />
        </div>
      </div>
    </div>
  );
}
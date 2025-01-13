import React from 'react';
import { ShoppingBag, Coffee, Book, Bus, Film, Home } from 'lucide-react';

const categories = [
  { name: 'Food & Dining', icon: Coffee, allocated: 300, spent: 250 },
  { name: 'Transportation', icon: Bus, allocated: 150, spent: 120 },
  { name: 'Books & Supplies', icon: Book, allocated: 200, spent: 180 },
  { name: 'Entertainment', icon: Film, allocated: 100, spent: 90 },
  { name: 'Shopping', icon: ShoppingBag, allocated: 150, spent: 130 },
  { name: 'Housing', icon: Home, allocated: 600, spent: 600 },
];

export function BudgetCategories() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Budget Categories</h2>
      <div className="grid gap-4">
        {categories.map((category) => {
          const progress = (category.spent / category.allocated) * 100;
          const remaining = category.allocated - category.spent;
          
          return (
            <div key={category.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <category.icon className="w-5 h-5 text-indigo-600" />
                  <span className="font-medium">{category.name}</span>
                </div>
                <span className="text-sm text-gray-500">
                  ${remaining} left
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    progress > 90 ? 'bg-red-500' : 'bg-indigo-600'
                  }`}
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
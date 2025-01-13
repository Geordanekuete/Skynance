import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const steps = [
  {
    title: 'Income',
    fields: [
      { name: 'monthlyIncome', label: 'Monthly Income', type: 'number' },
      { name: 'scholarships', label: 'Scholarships', type: 'number' },
    ]
  },
  {
    title: 'Fixed Expenses',
    fields: [
      { name: 'rent', label: 'Rent', type: 'number' },
      { name: 'utilities', label: 'Utilities', type: 'number' },
    ]
  },
  {
    title: 'Variable Expenses',
    fields: [
      { name: 'groceries', label: 'Groceries', type: 'number' },
      { name: 'entertainment', label: 'Entertainment', type: 'number' },
    ]
  }
];

export function BudgetWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold dark:text-white">{steps[currentStep].title}</h2>
        <div className="flex gap-2 mt-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 flex-1 rounded-full ${
                index <= currentStep ? 'bg-indigo-600' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {steps[currentStep].fields.map(field => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 disabled:opacity-50"
        >
          <ArrowLeft size={16} /> Previous
        </button>
        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          {currentStep === steps.length - 1 ? 'Finish' : 'Next'} <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
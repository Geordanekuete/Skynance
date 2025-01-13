import React, { ReactNode } from 'react';

interface DashboardCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  trend?: {
    value: string;
    positive: boolean;
  };
}

export function DashboardCard({ title, value, icon, trend }: DashboardCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className="text-gray-500">{title}</div>
        <div className="text-indigo-600">{icon}</div>
      </div>
      <div className="text-2xl font-bold mb-2">{value}</div>
      {trend && (
        <div className={`text-sm ${trend.positive ? 'text-green-500' : 'text-red-500'}`}>
          {trend.value} {trend.positive ? '↑' : '↓'} from last month
        </div>
      )}
    </div>
  );
}
import React from 'react';
import { DashboardHeader } from '../components/DashboardHeader';
import { DashboardStats } from '../components/DashboardStats';
import { DashboardContent } from '../components/DashboardContent';

export function Dashboard() {
  return (
    <>
      <DashboardHeader />
      <DashboardStats />
      <DashboardContent />
    </>
  );
}
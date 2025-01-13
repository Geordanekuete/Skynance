import React, { ReactNode } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  icon: ReactNode;
  children: ReactNode;
  collapsed?: boolean;
  onClick?: () => void;
}

export function NavLink({ to, icon, children, collapsed, onClick }: NavLinkProps) {
  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => `
        flex items-center gap-3 px-4 py-2 text-gray-300 
        hover:bg-indigo-800 rounded-lg transition-colors
        ${isActive ? 'bg-indigo-800 text-white' : ''}
      `}
      title={collapsed ? String(children) : undefined}
    >
      {icon}
      {!collapsed && <span>{children}</span>}
    </RouterNavLink>
  );
}
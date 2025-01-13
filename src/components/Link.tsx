import React, { ReactNode } from 'react';

interface LinkProps {
  href: string;
  icon: ReactNode;
  children: ReactNode;
  collapsed?: boolean;
}

export function Link({ href, icon, children, collapsed }: LinkProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-indigo-800 rounded-lg transition-colors"
      title={collapsed ? String(children) : undefined}
    >
      {icon}
      {!collapsed && <span>{children}</span>}
    </a>
  );
}
import type { LiHTMLAttributes, ReactNode } from 'react';

import { useNavigate } from '@tanstack/react-router';

type SidebarListItemProps = LiHTMLAttributes<HTMLLIElement> & {
  label: string;
  to: string;
  icon: ReactNode;
  isActive?: boolean;
};

export default function SidebarListItem({ label, to, icon, className, isActive }: SidebarListItemProps) {
  const navigate = useNavigate();

  return (
    <li className={`${isActive ? 'bg-secondary' : ''} ${className ?? ''}`}>
      <button
        className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
        data-tip={label}
        onClick={() => navigate({ to })}
      >
        {icon}
        <span className="is-drawer-close:hidden">{label}</span>
      </button>
    </li>
  );
}

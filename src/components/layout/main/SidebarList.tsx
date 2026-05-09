import type { ReactNode } from 'react';

import { GearIcon, HouseIcon, NotePencilIcon } from '@phosphor-icons/react';
import { useLocation } from '@tanstack/react-router';

import type { FileRouteTypes } from '@/routeTree.gen';

import SidebarListItem from './SidebarListItem';

// type SidebarIconProps = { icon: Icon } & ComponentProps<Icon>;
// function SidebarIcon({ icon: IconComponent, ...props }: SidebarIconProps) {
//   return <IconComponent size={16} className="my-1.5" {...props} />;
// }

type RoutePath = FileRouteTypes['to'];
type NavItem = { label: string; to: RoutePath; icon: ReactNode; className?: string };

const sidebarList: NavItem[] = [
  // { label: 'Home', to: '/', icon: <SidebarIcon icon={HouseIcon} /> },
  { label: 'Home', to: '/articles', icon: <HouseIcon size={16} className="my-1.5" /> },
  { label: 'Setting', to: '/me/profile', icon: <GearIcon size={16} className="my-1.5" /> },
  {
    label: 'Write',
    to: '/articles/draft',
    icon: <NotePencilIcon size={16} className="my-1.5" />,
    className: 'bg-primary text-primary-content',
    // 'lg:hidden border border-primary hover:bg-primary hover:text-primary-content active:bg-primary active:text-primary-content',
  },
];

export default function SidebarList() {
  const { pathname } = useLocation();

  return (
    <ul className="menu w-full grow">
      {sidebarList.map(({ label, to, icon, className }) => (
        <SidebarListItem
          key={label}
          {...{ label, to, icon, className, isActive: pathname === to }}
        />
      ))}
    </ul>
  );
}

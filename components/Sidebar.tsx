// components/Sidebar.tsx
"use client";

import {
  BuildingOfficeIcon,
  CircleStackIcon,
  CurrencyDollarIcon,
  HomeIcon,
  LockClosedIcon,
  LockOpenIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import tw from "tailwind-styled-components";
import { useUser } from "@auth0/nextjs-auth0/client";

const Menu = tw.ul`
  pl-2
`;

const MenuItem = tw.li`
  group
  hover:bg-white/10
  w-full
  px-4 py-1
  rounded-sm
`;

const MenuLink = tw.a`
  text-white
  flex flex-row gap-2
`;

const MenuIcon = tw.span`
  h-5 w-5
`;

export const Sidebar = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="absolute h-full py-8 px-2 w-60 max-w-xs bg-orange-500 dark:bg-orange-600 border-r border-orange-900">
      <nav>
        <Menu>
          {user && <MenuItem>Welcome, {user.name}</MenuItem>}
          <MenuItem>
            <MenuLink $as={Link} href="/">
              <MenuIcon $as={HomeIcon} />
              Home
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink $as={Link} href="/records">
              <MenuIcon $as={CircleStackIcon} />
              Records
            </MenuLink>
          </MenuItem>
          <Menu>
            <MenuItem>
              <MenuLink $as={Link} href="/records/sell">
                <MenuIcon $as={CurrencyDollarIcon} />
                Sell Yours
              </MenuLink>
            </MenuItem>
          </Menu>
          <MenuItem>
            <MenuLink $as={Link} href="/about">
              <MenuIcon $as={BuildingOfficeIcon} />
              About
            </MenuLink>
          </MenuItem>
          <MenuItem>
            {user ? (
              <MenuLink href="/api/auth/logout">
                <MenuIcon $as={LockOpenIcon} />
                Logout
              </MenuLink>
            ) : (
              <MenuLink href="/api/auth/login">
                <MenuIcon $as={LockClosedIcon} />
                Login
              </MenuLink>
            )}
          </MenuItem>
        </Menu>
      </nav>
    </div>
  );
};

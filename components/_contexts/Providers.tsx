// components/_contexts/Providers.tsx
"use client";

import { FC, ReactNode } from "react";

import { UserProvider } from "@auth0/nextjs-auth0/client";

type ProviderProps = {
  children: ReactNode | ReactNode[];
};

export const Providers: FC<ProviderProps> = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

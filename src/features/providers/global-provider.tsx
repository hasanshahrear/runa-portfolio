'use client';

import '@/app/globals.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PropsWithChildren } from 'react';

export function GlobalProvider({ children }: PropsWithChildren<any>) {
  return (
    <PrimeReactProvider>{children}</PrimeReactProvider>
  );
}

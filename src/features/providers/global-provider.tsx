'use client';

import '@/app/globals.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';

type TProps = {
  children: React.ReactNode
};

export function GlobalProvider({ children }: TProps) {
  return (
    <PrimeReactProvider>{children}</PrimeReactProvider>
  );
}

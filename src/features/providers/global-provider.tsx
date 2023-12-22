'use client';

import '@/app/globals.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';


type TProps = {
  children: React.ReactNode
}

export function GlobalProvider({ children }: TProps) {
  return (
    <PrimeReactProvider>{children}</PrimeReactProvider>
  );
}

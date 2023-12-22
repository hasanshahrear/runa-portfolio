"use client"

import { GlobalProvider } from '@/features/providers';
// import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import "primereact/resources/themes/lara-light-cyan/theme.css";

const openSans = Open_Sans({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: "Rejuna's Portfolio",
//   description: 'This is a personal portfolio',
// }

type TProps = {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: TProps) {
  return (
    <html lang="en">
        <GlobalProvider>
          <body className={openSans.className}>
              {children}
          </body>
        </GlobalProvider>
    </html>
  )
}

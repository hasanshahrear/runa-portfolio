import { GlobalProvider } from '@/features/providers';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
// import './globals.css'

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Rejuna\'s Portfolio",
  description: 'This is a personal portfolio',
};

type TProps = {
  children: React.ReactNode
};

export default function RootLayout({
  children,
}: TProps) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const style = document.createElement('style')
              style.innerHTML = '@layer tailwind-base, primereact, tailwind-utilities;'
              style.setAttribute('type', 'text/css')
              document.querySelector('head').prepend(style)
            `,
          }}
        />
      </head>
      <body className={openSans.className}>
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}

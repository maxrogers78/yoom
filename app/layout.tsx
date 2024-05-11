import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yoom',
  description: 'Zoom clone built with Next.js',
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: '/icons/yoom-logo.svg',
            socialButtonsVariant: 'iconButton',
          },
          variables: {
            colorText: '#ccc',
            colorPrimary: '#0E78F9',
            colorBackground: '#1c1f2e',
            colorInputBackground: '#252a41',
            colorInputText: '#ccc',
          },
        }}
      >
        <body
          suppressHydrationWarning
          className={cn(inter.className, 'bg-dark-2')}
        >
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}

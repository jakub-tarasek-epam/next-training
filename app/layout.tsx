import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Budget&Subscription',
  description: 'Manage your home budget and subscriptions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}

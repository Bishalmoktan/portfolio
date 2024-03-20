import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { AppProvider } from '@/providers/app-provider';
import { Toaster } from 'sonner';

const font = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bishalmoktan.com.np'),

  title: {
    template: '%s | Bishal',
    default: 'Bishal Moktan',
  },
  authors: {
    name: 'Bishal',
  },
  icons: {
    icon: '/favicon.ico',
  },

  description:
    "Based in Kathmandu, I'm a aspiring fullstack developer learning and building the modern web application.",
  openGraph: {
    title: 'Bishal Moktan',
    description:
      "Based in Kathmandu, I'm a aspiring fullstack developer learning and building the modern web application.",
    url: 'https://www.bishalmoktan.com.np',
    siteName: 'Bishal Moktan',
    images: '/og.png',
    type: 'website',
  },
  keywords: ['bishal', 'Bishal Moktan', 'bishalmoktan'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning>
        <AppProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster richColors />
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}

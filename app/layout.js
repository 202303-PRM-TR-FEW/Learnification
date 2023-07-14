'use client'
import { SessionProvider } from 'next-auth/react';
import './globals.css'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'LearnU',
  description: 'LearnU is a platform for learning and teaching online.'
}

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
        </body>
    </html>
  );
}

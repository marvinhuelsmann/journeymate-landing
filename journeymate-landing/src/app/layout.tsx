import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
        <Head>
          <meta name="apple-itunes-app" content="app-id=6448196185, affiliate-data=6448196185, app-arguments=6448196185" />
        </Head>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
      </>
  )
}

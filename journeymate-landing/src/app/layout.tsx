import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JourneyMate - iOS App',
  description: 'In JourneyMate kannst du deiner aktuellen Stadt eine persönliche Stimmung geben und diese mit einem JourneyFoto in deinem öffentlichen Profil verewigen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <Head>
           <meta name="apple-itunes-app" content="app-id=6448196185"/>
       </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

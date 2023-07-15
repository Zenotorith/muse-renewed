import './globals.css'
import type { Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'

const lexendDeca = Lexend_Deca({ subsets: ['vietnamese'] })

export const metadata: Metadata = {
  title: 'Muse',
  description: 'Creating better things'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='@/app/favicon.ico' />
      </head>

      <body className={lexendDeca.className}>{children}</body>
    </html>
  )
}

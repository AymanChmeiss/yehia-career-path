import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Yehia's Career Path",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

return (
    <html lang="en">
      <body className={inter.className}>
        
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/plan">Plan</Link>
          <Link href="/opportunities">Opportunities</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        <main className="main">
          {children}
        </main>

      </body>
    </html>
  )
}
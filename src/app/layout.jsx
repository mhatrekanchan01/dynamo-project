import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./components/topNavbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dynamo - Product Website',
  description: 'Your latest product website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <Navbar />
         {children}
      </body>
    </html>
  )
}

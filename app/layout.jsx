import './globals.css';
import { Inter } from 'next/font/google';
import MainHeader from './components/header/MainHeader';
import MainFooter from './components/footer/MainFooter';
import SessionAuthProvider from './context/SessionAuthProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CS.Finder',
  description: 'App to trade your skins',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionAuthProvider>
          <MainHeader/>
            {children}
          <MainFooter/>
        </SessionAuthProvider>
      </body>
    </html>
  )
}

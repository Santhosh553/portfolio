import { ReactNode } from 'react'
import { GlobalProvider } from '@/contexts/Global'

import './globals.css'
// import 'antd/dist/reset.css'

export const metadata = {
  title: 'Santhosh Senthil',
  description:
    'Santhosh Senthil, a full-stack developer from India',
  keywords: 'Santhosh Senthil, Santhosh, Santhosh S',
  abstract: 'Santhosh Senthil, a full-stack developer from India',
  applicationName: "Santhosh's Portfolio",
  authors: [{ name: 'Santhosh Senthil', url: 'https://itsmesanthosh.me' }],
  creator: 'Santhosh Senthil',
  publisher: 'Vercel',
  viewport: 'width=device-width, initial-scale=1'
}

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className="bg-main text-snow"
      style={{ scrollBehavior: 'smooth' }}
      id="theme"
    >
      <GlobalProvider>
        <body>{children}</body>
      </GlobalProvider>
    </html>
  )
}

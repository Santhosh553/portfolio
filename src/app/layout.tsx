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
  authors: [{ name: 'Santhosh Senthil', url: 'https://wildanzr.my.id' }],
  creator: 'Santhosh Senthil',
  publisher: 'Vercel',
  viewport: 'width=device-width, initial-scale=1',
  twitter: {
    siteId: '@wildanzr24',
    creatorId: '@wildanzr24',
    card: 'summary_large_image',
    site: '@wildanzr24',
    creator: '@wildanzr24',
    title: 'Graita Sukma Febriansyah Triwildan Azmi',
    description: 'Graita Sukma Febriansyah Triwildan Azmi, a full-stack developer from Indonesia',
    images: 'https://wildanzr.my.id/images/me.png'
  }
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

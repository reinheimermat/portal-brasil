import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portal Brasil',
  description: 'Site oficial da Portal Brasil',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/lox7gxc.css" />
      </head>
      <body className="font-serif antialiased">{children}</body>
    </html>
  )
}

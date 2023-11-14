/**
 * @Author: Jahidul Haque Shanto
 * @Date:   2023-11-13 09:58:44
 * @Last Modified by:   Jahidul Haque Shanto
 * @Last Modified time: 2023-11-13 14:28:13
 */
import {inter} from '@/app/ui/fonts'
import '@/app/ui/global.css'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

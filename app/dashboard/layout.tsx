/**
 * @Author: Jahidul Haque Shanto
 * @Date:   2023-11-14 10:36:06
 * @Last Modified by:   Jahidul Haque Shanto
 * @Last Modified time: 2023-11-14 10:37:23
 */

import SideNav from '@/app/ui/dashboard/sidenav'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <div className='w-full flex-none md:w-64'>
        <SideNav />
      </div>
      <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
    </div>
  )
}

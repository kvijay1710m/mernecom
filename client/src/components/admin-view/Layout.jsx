import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = () => {
  return (
    <div className='flex minh-screen w-full ' >
        {/* Admin sidebar */}
        <Sidebar/>
        <div className='flex flex-1 flex-col'>
                {/* Admin header */}
                <Header/>
                <main className='flex-1 flex bg-muted/40 p-4 md:p-6'>
                    <Outlet/>
                </main>
        </div>
    </div>
  )
}

export default Layout
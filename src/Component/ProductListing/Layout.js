import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'


const Layout = () => {
  return (
    <div>
      <main className='w-[1200] max-w-full m-auto p-5'>
        <Header />
        <Outlet />
      </main>
    </div>
  )
}

export default Layout

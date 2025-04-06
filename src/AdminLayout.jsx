import React from 'react'
import HeaderAdmin from './components/HeaderAdmin'
import SidebarAdmin from './components/SidebarAdmin'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div className='container mx-auto grid grid-cols-[300px_1fr]'>
        <SidebarAdmin></SidebarAdmin>   
        <div>
        <HeaderAdmin></HeaderAdmin> 
        <Outlet></Outlet>
        </div>
   
</div>
  )
}

export default AdminLayout
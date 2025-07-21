import React from 'react'
import Header from '../../components/CollapsibleHeader/Header'
import { Outlet } from 'react-router'

const Layout: React.FC = () => {
  return (
    <div>
        <Header />
        <Outlet/>
    </div>
  )
}

export default Layout
import React, { useState } from 'react'
import Header from '../Components/Header/Header'
import TopDashboard from '../Components/Topdashboard/TopDashboard'
import Dashboard from '../Pages/Dashboard';
import Sidebar from '../Components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [openSidebar, setOpenSideber] = useState(false)
  const SidebarHandler = () =>{
    setOpenSideber(!openSidebar)
  }
  return (
    <div className="Layout-container">
      <Header SidebarHandler={SidebarHandler} />
      <TopDashboard />

      <div className={`sidebar-component ${openSidebar ? "OpenSidebar" : ""}`}>
        <Sidebar />
      </div>
      <div className="main-content">
        <Outlet/>
      </div>
      <Dashboard />
    </div>
  );
}

export default Layout;
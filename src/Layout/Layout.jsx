import React from 'react'
import Header from '../Components/Header/Header'
import TopDashboard from '../Components/Topdashboard/TopDashboard'
import Dashboard from '../Pages/Dashboard';
import Sidebar from '../Components/Sidebar/Sidebar';

const Layout = () => {
  return (
    <div className="Layout-container">
    <div className="sidebar-component">
        <Sidebar/>
    </div>
      <Header />
      <TopDashboard />
      <Dashboard />
    </div>
  );
}

export default Layout;
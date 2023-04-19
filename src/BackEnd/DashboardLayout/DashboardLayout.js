import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../FrontEnd/Navbar/Navbar';
import useAdmin from '../../hooks/useAdmin';
import { AuthContext } from '../Auth/contexts/AuthProvider/AuthProvider';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    return (
    <div className="">
    <Navbar></Navbar>
    <div className="drawer drawer-mobile">
    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
        <Outlet></Outlet>
    </div> 

    <div className="drawer-side bg-slate-200">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 text-base-content">
      
        <li><Link to= "/dashboard">Dashboard</Link></li>
        <li><Link to="/dashboard/createService">Add Service</Link></li>
        <li><Link to="/dashboard/manageService">Manage Service</Link></li>

         {
            isAdmin && <>
            <li><Link to="/dashboard/users">Manage Users</Link></li>
            <li><Link to="/dashboard">Manage Contacts</Link></li>
            </>
        }
    </ul>
  
  </div>
</div>
</div>
    );
};

export default DashboardLayout;
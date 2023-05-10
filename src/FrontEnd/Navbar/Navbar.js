import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import menu from './menus.json';
import logo from '../../AriTechsResource/Logo/logo-transparent.png';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { AuthContext } from '../../BackEnd/Auth/contexts/AuthProvider/AuthProvider';
import "../Navbar/Navbar.css";


const Navbar = () => {
    const {menus} = menu;
    console.log(menus[2].dropdown);
    const {user, logout} = useContext(AuthContext);

    const handleLogout = ()=>{
      logout()
      .then()
      .catch();
    }

  return (
  <div className = "navbar sticky top-0 z-50 bg-white" >
    {/* Mobile Menu */}
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="mob-icon btn btn-ghost md:hidden lg:hidden">
        <Bars3Icon className = "h-12 w-12 text-black-500" />
      <ul tabIndex={0} className="mob-menu menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box font-bold w-52 top-8 left-0.5">
          {/* main menu */}
      {menus.length >0 &&
          menus.map((menu)=> (
      <li className='text-white bg-red-500' key={menu.id}>
            <Link to={menu.path}>{menu.title}</Link>
            {/* Submenu */}
            {menu?.dropdown?.length > 0 && (
            <ul className="p-2 bg-red-500 text-white">
              {menu?.dropdown?.map(dropdownMenu =>(
              <li className="" key={dropdownMenu.id}>
                <Link to={dropdownMenu.path}>{dropdownMenu.title}</Link> 
              </li>
              ))}
        </ul>
              )}
      </li>
          ))}

      </ul>
      </label>
    </div>
    <Link to={"/"}><img className='h-20' src={logo} alt='' /></Link>
  </div>

{/* Desktop Menu */}
  <div className="menuArea navbar-center md:flex hidden lg:flex">
    {/* main menu */}
    <ul className="menu menu-horizontal px-1">
      {menus.length >0 &&
          menus.map((menu)=> (
      <li className="text-black font-semibold group inline-block relative" key={menu.id}>
            <Link to={menu.path}>{menu.title}</Link>
            {/* Submenu */}
            {menu?.dropdown?.length > 0 && (
            <ul className = "bg-white text-black" >
              {menu?.dropdown?.map(dropdownMenu =>(
          <li className="" key={dropdownMenu.id}>
                <Link to={dropdownMenu.path}>{dropdownMenu.title}</Link> 
              </li>
              ))}
        </ul>
              )}
      </li>
          ))}
    </ul>  
  </div>

  <div className="navbar-end">
    {user?.email &&
    <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost md:hidden lg:hidden">
        <Bars3Icon className = "h-12 w-12 text-black-500" />
      </label>
      }
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="avatar-icon btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://www.w3schools.com/w3images/avatar6.png" alt='' />
        </div>
      
      <ul tabIndex={0} className="avatar-menu mt-3 p-2 menu menu-compact dropdown-content bg-base-100 rounded-box w-52 top-8 normal-case">
        <li className=""><Link to= "/dashboard">Dashboard</Link></li>
        <li>
          <Link to={""} className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        
        {user?.email ?
        <>
        <li><Link to={"/"} >User: {user?.email}</Link></li>     
        <li><button onClick={handleLogout} >Logout</button></li>
        </>
        :
        <>
        <li><Link to={"/login"}>Login</Link></li>
        <li><Link to={"/signup"}>Sign Up</Link></li>
        </>
        }     
        <li><Link to={""}>Settings</Link></li>     
      </ul>
      </label>
    </div>
  </div>
</div>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import menu from './menus.json';
import logo from '../../AriTechsResource/Logo/ari-techs-logo.jpg'
import { Bars3Icon } from '@heroicons/react/24/solid'


const Navbar = () => {
  const {menus} = menu;
  console.log(menus[2].dropdown);
  return (
  < div className = "navbar sticky top-0 z-50 bg-base-200" >
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost md:hidden lg:hidden">
        <Bars3Icon className = "h-12 w-12 text-black-500" />
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box font-bold w-52">
        
          {/* main menu */}
      {menus.length >0 &&
          menus.map((menu)=> (
      <li key={menu.id}>
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
    </div>
    <Link to={"/"} className=""><img src={logo} alt='' width={50} height={50} /></Link>
  </div>
  <div className="navbar-center md:flex hidden lg:flex">
    
    {/* main menu */}
    <ul className="menu menu-horizontal px-1">
      {menus.length >0 &&
          menus.map((menu)=> (
      <li className='' key={menu.id}>
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
  </div>
  <div className="navbar-end">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://www.w3schools.com/w3images/avatar6.png" alt='' />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link to={""} className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to={""}>Settings</Link></li>
        <li><Link to={""}>Logout</Link></li>
      </ul>
    </div>
  </div>
</div>
  );
};

export default Navbar;
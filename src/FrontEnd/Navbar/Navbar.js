import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import menu from './menus.json';
import logo from '../../AriTechsResource/Logo/logo-updated.jpg';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { AuthContext } from '../../BackEnd/Auth/contexts/AuthProvider/AuthProvider';



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
  < div className = "navbar sticky top-0 z-50 bg-blue-700" >
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost md:hidden lg:hidden">
        <Bars3Icon className = "h-12 w-12 text-black-500" />
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box font-bold w-52">
        
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
    </div>
    <Link to={"/"}><img className='h-20' src={logo} alt='' /></Link>
  </div>
  <div className="menuArea navbar-center md:flex hidden lg:flex">
    
    {/* main menu */}
    <ul className="menu menu-horizontal px-1 text-white">
      {menus.length >0 &&
          menus.map((menu)=> (
      <li className="group inline-block relative" key={menu.id}>
            <Link to={menu.path}>{menu.title}</Link>

            {/* Submenu */}
            {menu?.dropdown?.length > 0 && (
            <ul className = "bg-red-500 text-white" >
              {menu?.dropdown?.map(dropdownMenu =>(
          <li className="" key={dropdownMenu.id}>
                <Link to={dropdownMenu.path}>{dropdownMenu.title}</Link> 
              </li>
              ))}
        </ul>
              )}

            {/* Mega menu */}
            {/* {menu?.megaMenus?.length > 0 && (
            <ul id={styles.megaMenu} className="grid grid-cols-2 absolute hidden group-hover:block w-96">
              {menu?.megaMenus?.map(megaMenu =>(
              <li className='' key={megaMenu.id}>
                <Link to={megaMenu.path}>{megaMenu.megaMenuTitle}</Link>
                
              </li>
              ))}
        </ul>
              )} */}
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
    </div>
  </div>
</div>
  );
};

export default Navbar;
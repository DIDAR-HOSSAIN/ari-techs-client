import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../AriTechsResource/Logo/logo-updated.jpg';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-11/12 mx-auto">
      <div className= "wrapper">
      <div className="logo flex">
        <Link to="/"><img src={logo} width={80} height={80} alt="" /></Link>

      <div onClick={()=> setOpen(!open)} className="h-10 w-10 md:hidden">
        {
        open ? <XMarkIcon /> : <Bars3Icon />
        }
      </div>
      
      </div>
       <ul className={`nav-links absolute md:static`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/">Services</Link>
        <div className="mega-box sm:w-full">
          <div className="content">
            <div className="row">
              <header>Design Services</header>
              <ul className='mega-links'>
                <li><Link to="/">Link-1</Link></li>
                <li><Link to="/">Link-2</Link></li>
                <li><Link to="/">Link-3</Link></li>
                <li><Link to="/">Link-4</Link></li>
                <li><Link to="/">Link-5</Link></li>
                <li><Link to="/">Link-6</Link></li>
              </ul>
            </div>

            <div className="row">
              <header>Design Services</header>
              <ul className='mega-links'>
                <li><Link to="/">Link-1</Link></li>
                <li><Link to="/">Link-2</Link></li>
                <li><Link to="/">Link-3</Link></li>
                <li><Link to="/">Link-4</Link></li>
                <li><Link to="/">Link-5</Link></li>
                <li><Link to="/">Link-6</Link></li>
              </ul>
            </div>

            <div className="row">
              <header>Design Services</header>
              <ul className='mega-links'>
                <li><Link to="/">Link-1</Link></li>
                <li><Link to="/">Link-2</Link></li>
                <li><Link to="/">Link-3</Link></li>
                <li><Link to="/">Link-4</Link></li>
                <li><Link to="/">Link-5</Link></li>
                <li><Link to="/">Link-6</Link></li>
              </ul>
            </div>
            
          </div>  
        </div>
        </li>
        <li><Link to="/"><img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="avatar" /></Link>
        <ul className="drop-menu">
          <li><Link to="/">Profile</Link></li>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
        </li>
      </ul>
    </div>
    </nav>
  );
};

export default Navbar;
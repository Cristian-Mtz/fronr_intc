import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData1, SidebarData2 } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import SideItem from './SideItem';
import useAuth from '../../auth/useAuth';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const { role } = useAuth();

  let data = [];
  if (role === 1) {
    data = SidebarData1;
  } else if (role === 2) {
    data = SidebarData2;
  }

  return (
    <>
      <div className='navbar col-12'>
        <Link to='#' className='menu-bars'>
          <IconContext.Provider value={{ style: { color: '#16c79a' } }}>
            <FaIcons.FaBars onClick={showSidebar} />
          </IconContext.Provider>
        </Link>
        <h4 className="title">Ecommerce Plataform</h4>
      </div>
        <div className={sidebar ? 'nav-menu active col-2 p-0' : 'nav-menu non'}>
          <nav className="nav">
            <ul className='nav-menu-items '>
              {data.map((item, index) => {
                return <SideItem key={index} items={item} close={showSidebar} />;
              })}
            </ul>
          </nav>
        </div>
    </>
  );
}

export default Navbar;

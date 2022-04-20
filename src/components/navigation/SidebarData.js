import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData1 = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    open: false,
    subMenu: []
  },
  {
    title: 'Usuarios',
    path: '/users',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    open: false,
    subMenu: []
  },
  {
    title: 'Productos',
    path: '/Products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text',
    open: false,
    subMenu: []
  }
];

export const SidebarData2 = [
  {
    title: 'Home2',
    path: '/Home2',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Reports2',
    path: '/reports2',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Products2',
    path: '/products2',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  }
];
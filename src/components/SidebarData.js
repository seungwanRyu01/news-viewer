import React from 'react';
import * as BsIcons from 'react-icons/bs';
export const SidebarData = [
  {
    title: '메인으로',
    path: '/ToExamine',
    icon: <BsIcons.BsFillHouseDoorFill />,
    cName: 'nav-text'
  },
  {
    title: '요소수란?',
    path: '/',
    icon: <BsIcons.BsFillInfoCircleFill />,
    cName: 'nav-text'
  },
  {
    title: '뉴스',
    path: '/About',
    icon: <BsIcons.BsNewspaper />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Us',
    path: '/Contact',
    icon: <BsIcons.BsEnvelopeFill />,
    cName: 'nav-text'
  }
];
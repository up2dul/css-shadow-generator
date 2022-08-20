import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { configNavLinks as links } from '@/configs/nav-links';

export const Navbar = () => (
  <nav className='mb-8'>
    <ul className='flex justify-center gap-x-20 relative'>
      {links.map(({ target, text }) => (
        <li key={target}>
          <NavLink to={target}>
            {({ isActive }) => (
              <span className={clsx(
                'text-xl z-10 decoration-2 hover:opacity-80',
                isActive
                ? 'text-primary dark:text-light font-bold underline'
                : 'hover:underline hover:decoration-dashed'
              )}>
                {text}
              </span>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

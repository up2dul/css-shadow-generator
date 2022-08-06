import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { configNavLinks as links } from '../configs/nav-links';

export const Navbar = () => (
  <nav className='mb-8'>
    <ul className='flex justify-center gap-x-20'>
      {links.map(({ target, text }) => (
        <NavLink key={target} to={target}>
          {({ isActive }) => (
            <li
              className={clsx(
                'text-lg',
                isActive && 'font-bold underline decoration-2'
              )}
            >
              {text}
            </li>
          )}
        </NavLink>
      ))}
    </ul>
  </nav>
);

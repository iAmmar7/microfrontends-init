import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const routes = [
  {
    name: 'Auth',
    href: '/auth',
  },
  {
    name: 'Tasks',
    href: '/tasks',
  },
];

export default function Root(props) {
  return (
    <Router>
      <div className='h-14 flex items-center justify-between px-6 bg-primary text-white font-medium'>
        <div className='flex items-center justify-between gap-x-4'>
          {routes.map((link) => {
            return (
              <Link key={link.href} to={link.href} className='hover:text-danger transition duration-300'>
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className='flex items-center justify-between hover:text-warning transition duration-300'>
          <a href='https://github.com/iAmmar7/microfrontends-task-app' className='externalLink'>
            Github project
          </a>
        </div>
      </div>
    </Router>
  );
}

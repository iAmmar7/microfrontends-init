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
      <div className='navbar h-16 flex items-center justify-between px-6 bg-primary text-white'>
        <div className='routes flex items-center justify-between'>
          {routes.map((link) => {
            return (
              <Link key={link.href} className='p-6' to={link.href}>
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className='route-external flex items-center justify-between'>
          <a href='https://github.com/iAmmar7/microfrontends-task-app' className='externalLink'>
            Github project
          </a>
        </div>
      </div>
    </Router>
  );
}

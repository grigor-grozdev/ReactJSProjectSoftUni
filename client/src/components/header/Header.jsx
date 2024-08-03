import { Disclosure } from '@headlessui/react'
import { NavLink, Link } from 'react-router-dom'

import { useAuthContext } from '../../contexts/AuthContext'

const navigationAuth = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Search', href: '/search' },
  { name: 'Add Event', href: '/create' },
  { name: 'Logout', href: '/logout' },
  { name: '| View profile page', href: '/profile' },
]

const navigationNonAuth = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Search', href: '/search' },
  { name: 'Login', href: '/login' },
  { name: 'Register', href: '/register' },
]

export default function Header() {
  const { isAuthenticated, username } = useAuthContext();
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-700">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    alt="bike logo"
                    src="/bike.jpg"
                    className="h-8 w-8"
                  />
                </div>
                <div>
                  {isAuthenticated ?
                    (<div className="ml-10 flex items-baseline space-x-4">
                      {navigationAuth.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) => isActive ?
                            ('bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium')
                            : ('rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-white')
                          }>
                          {item.name}
                        </NavLink>
                      ))}
                      <div className="flex-shrink-0 px-3 py-2 text-gray-300 text-sm font-medium">
                        <p>| Hello, {username}!</p>
                      </div>
                      
                    </div>) :
                    (<div className="ml-10 flex items-baseline space-x-4">
                      {navigationNonAuth.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) => isActive ?
                            ('bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium')
                            : ('rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-white')
                          }>
                          {item.name}
                        </NavLink>
                      ))}
                      <div className="flex-shrink-0 px-3 py-2 text-gray-300 text-sm font-medium">
                        <p>| You are visiting as a guest. Login or register to unlock all features.</p>
                      </div>
                    </div>)
                  }
                </div>
              </div>
            </div>
          </div>
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Welcome to the world of cycling!</h1>
          </div>
        </header>
      </div>
    </>
  );
}
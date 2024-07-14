import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import UpcomingEvents from './UpcomingEvents'
import EventForm from './EventForm'
import Details from './Details'
import AllEvents from './Events'
import Search from './Search'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Events', href: '/events', current: false },
  { name: 'Add Event', href: '/create', current: false },
  { name: 'Login', href: '/login', current: false },
  { name: 'Register', href: '/register', current: false },
  { name: 'Logout', href: '/logout', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  return (
    <>

      
        <main>
          
            {/* Your 

content */}

            <UpcomingEvents />          
            
            <Details />

          
        </main>
      
    </>
  )
}
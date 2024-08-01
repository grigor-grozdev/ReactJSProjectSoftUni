import { Routes, Route } from "react-router-dom"

import { AuthContextProvider } from "./contexts/AuthContext"

import Dashboard from "./components/dashboard/Dashboard"
import Details from "./components/details/Details"
import EventForm from "./components/event-form/EventForm"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Login from "./components/login/Login"
import NotFound from "./components/not-found/NotFound"
import Register from "./components/register/Register"
import Search from "./components/search/Search"
import AllEvents from "./components/events/Events"
import Logout from "./components/logout/Logout"
import EventEdit from "./components/event-edit/EventEdit"

function App() {

  return (
    <AuthContextProvider>
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<Register />} />
          <Route path='/search' element={<Search />} />
          <Route path='/events' element={<AllEvents />} />          
          <Route path='/events/:eventId' element={<Details />} />
          <Route path='/events/:eventId/edit' element={<EventEdit />} />
          <Route path='/create' element={<EventForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </AuthContextProvider>
  )
}

export default App

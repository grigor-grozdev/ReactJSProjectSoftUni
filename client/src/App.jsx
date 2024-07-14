import { Routes, Route } from "react-router-dom"

import Dashboard from "./components/Dashboard"
import Details from "./components/Details"
import EventForm from "./components/EventForm"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Login from "./components/Login"
import NotFound from "./components/NotFound"
import Register from "./components/Register"
import Search from "./components/Search"
import AllEvents from "./components/Events"

function App() {

  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/search' element={<Search />} />
          <Route path='/events' element={<AllEvents />} />
          <Route path='/create' element={<EventForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>


        {/* Your 
  
      content */}

      </div>
      <Footer />
    </>

  )
}

export default App

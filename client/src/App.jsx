import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { AuthContext } from "./contexts/AuthContext"

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

function App() {
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    setAuthState(state);
  }

  const contextData = {
    userId: authState._id,
    username: authState.username,
    emai: authState.emai,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState
  }

  return (
    <AuthContext.Provider value={contextData}>
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/search' element={<Search />} />
          <Route path='/events' element={<AllEvents />} />          
          <Route path='/events/:eventId' element={<Details />} />
          <Route path='/create' element={<EventForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </AuthContext.Provider>

  )
}

export default App

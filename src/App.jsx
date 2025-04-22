import { useState } from 'react'
import { Route, Router, Routes } from 'react-router'
import Dashboard from './Pages/Dashboard'
import Plans from './Pages/Plans'
import Settings from './Pages/Settings'
import Movies from './Pages/Movies'
import Layout from './Pages/Layout'
import SignUp from './Components/SignUp/SignUp'
import SignIn from './Components/SignIn/SignIn'
import Cars from './Pages/Cars'
import InfoMovies from './Components/InfoMovies/InfoMovies'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'

function App() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='plans' element={<Plans />} />
          <Route path='cars' element={<Cars />} />
          <Route path='settings'
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>}
          />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/infomovies/:id' element={<InfoMovies />} />
          {/* /movies/infomovies */}

        </Route>


        <Route path='signup' element={<SignUp />} />
        <Route path='signin' element={<SignIn />} />
      </Routes>

    </>
  )
}

export default App;

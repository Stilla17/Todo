import { useState } from 'react'
import { Route, Router, Routes } from 'react-router'
import Dashboard from './Pages/Dashboard'
import Plans from './Pages/Plans'
import Settings from './Pages/Settings'
import Movies from './Pages/Movies'
import Layout from './Pages/Layout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='plans' element={<Plans />} />
          <Route path='settings' element={<Settings />} />
          <Route path='movies' element={<Movies />} />

        </Route>

      </Routes>
    </>
  )
}

export default App;
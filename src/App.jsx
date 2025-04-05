import { useState } from 'react'
import { Route, Router, Routes } from 'react-router'
import Dashboard from './Pages/Dashboard'
import Plans from './Pages/Plans'
import Calendar from './Pages/Calendar'
import Layout from './Pages/Layout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='plans' element={<Plans />} />
          <Route path='calendar' element={<Calendar />} />
        </Route>

      </Routes>
    </>
  )
}

export default App;
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Inbox from './pages/Inbox'
import Today from './pages/Today'
import Upcoming from './pages/Upcoming'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Inbox />} />
      <Route path='/today' element={<Today />} />
      <Route path='/upcoming' element={<Upcoming />} />
    </Routes>
  )
}

export default App
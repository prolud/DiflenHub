import { Route, Routes } from 'react-router-dom'

import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'

import Home from './pages/home/Home'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}
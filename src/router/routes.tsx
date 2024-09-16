import { Route, Routes, Navigate } from 'react-router-dom'

import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'

import Home from './pages/Home'
import Categories from './pages/Categories'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/Home' element={<Home />} />
        <Route path='/Categories' element={<Categories />} />

        <Route path='/*' element={<Navigate to='/Home' />} />
      </Route>
    </Routes>
  )
}
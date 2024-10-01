import { Route, Routes } from 'react-router-dom'

import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'

import Home from './pages/Home'
import Categories from './pages/Categories'
import NotFound from './pages/NotFound'

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
      
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />

        <Route path='/categories' element={<Categories />} />

        <Route path='/*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
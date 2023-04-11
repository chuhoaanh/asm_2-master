import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/user'
import Homepage from './pages/homepage'
import ProductDetail from './pages/detail'
import Login from './pages/signin'
import Signup from './pages/signup'
import Dashboard from './pages/dashboard'
import AdminLayout from './components/layout/admin'
import ProductAdd from './pages/add_pd'
import ListCate from './pages/listCate'
import CategoryAdd from './pages/add_cate'
import CategoryEdit from './pages/edit_cate'
import AdminUpdate from './pages/edit_pd'


// 1. Khai bao router

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/' element={<UserLayout />}>
        <Route index element={<Homepage />} />
        <Route path='product/:id' element={<ProductDetail />} />
      </Route>
      <Route path='/admin' element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='product/add' element={<ProductAdd />} />
        <Route path='product/edit/:id' element={<AdminUpdate />} />
        <Route path='category' element={<ListCate />} />
        <Route path='category/add' element={<CategoryAdd />} />
        <Route path='category/edit/:id' element={<CategoryEdit />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
import React from 'react'
import Home from './components/page/Home';
import RootLayout from './components/layer/RootLayout';
import Shop from './components/page/Shop';
import About from './components/page/About';
import Contact from './components/page/Contact';
import Journal from './components/page/Journal';
import Error from './components/page/Error';

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignUp from './components/page/SignUp';
import ProductDetails from './components/page/ProductDetails';
import Checkout from './components/page/Checkout';
import Cart from './components/page/Cart';
import Login from './components/page/Login';
import Myaccount from './components/page/Myaccount';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>

    <Route
      path="/"
      element={<RootLayout />}
      errorElement={<Error/>}
    >
      <Route index element={<Home />}></Route>
      <Route path='/Home' element={<Home />}></Route>
      <Route path='/Shop' element={<Shop />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Contact' element={<Contact />}></Route>
      <Route path='/Journal' element={<Journal />}></Route>
      <Route path='/Sign/up' element={<SignUp />}></Route>
      <Route path='/Product/Details' element={<ProductDetails />}></Route>
      <Route path='/Cart' element={<Cart />}></Route>
      <Route path='/CheckOut' element={<Checkout />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path='/Myaccount' element={<Myaccount />}></Route>
    </Route>
      </>
  )
);


const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

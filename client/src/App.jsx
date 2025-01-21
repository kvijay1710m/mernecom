
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/auth/Layout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import AdminLayout from './components/admin-view/AdminLayout'
import AdminDashboard from './pages/admin-view/Dashboard'
import AdminOrders from './pages/admin-view/Orders'
import AdminFeatures from './pages/admin-view/Features'
import Notfound from './pages/not-found'
import ShoppingLayout from './components/shopping-view/ShoppingLayout'
import ShoppingHome from './pages/shopping-view/Home'
import ShoppingListing from './pages/shopping-view/Listing'
import ShoppingCheckout from './pages/shopping-view/Checkout'
import ShoppingAccount from './pages/shopping-view/Account'
import CheckAuth from './components/common/CheckAuth'
import UnauthPage from './pages/unauth-page'

function App() {
  const isAuthenticated = false
  const user = null
  // const user = {
  //   name: "vj",
  //   role: "user"
  // }

  return (
    <>
      <div className='flex flex-col overflow-hidden bg-white'>

        <Routes>
          <Route path="/auth" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}  >
              <Layout />   { /*children ,it is prop in checkAuth */}
            </CheckAuth>} >
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path='/admin' element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user} >
              <AdminLayout />
            </CheckAuth>
          }>
            <Route path='dashboard' element={<AdminDashboard />} />
            <Route path='layout' element={<AdminLayout />} />
            <Route path='orders' element={<AdminOrders />} />
            <Route path='features' element={<AdminFeatures />} />
          </Route>


          <Route path='/shop' element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user} >
              <ShoppingLayout />
            </CheckAuth>
          }>
            <Route path='home' element={<ShoppingHome />} />
            <Route path='listing' element={<ShoppingListing />} />
            <Route path='checkout' element={<ShoppingCheckout />} />
            <Route path='account' element={<ShoppingAccount />} />
          </Route>

          <Route path='*' element={<Notfound />} />
          <Route path='/unauth-page' element={<UnauthPage />} />

        </Routes>
      </div>
    </>
  )
}

export default App

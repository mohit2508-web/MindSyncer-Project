import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import HeroPage from './components/pages/HeroPage.jsx'
import Pricing from './components/pages/Pricing.jsx'
import SignUp from './components/pages/SignUp.jsx'
import StarProfiles from './components/pages/StarProfiles.jsx'
import Explore from './components/pages/Explore.jsx'
import UserDashboard from './components/pages/UserDashboard.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<HeroPage />}/>
      <Route path='Pricing' element={<Pricing />}/>
      <Route path='SignUp' element={<SignUp />}/>
      <Route path='StarProfiles' element={<StarProfiles />}/>
      <Route path='Explore' element={<Explore />}/>
       <Route 
        path="dashboard" 
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import HeroPage from './components/pages/HeroPage.jsx'
import Pricing from './components/pages/Pricing.jsx'
import SignIn from './components/pages/SignIn.jsx'
import SignUp from './components/pages/SignUp.jsx'
import StarProfiles from './components/pages/StarProfiles.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<HeroPage />}/>
      <Route path='Pricing' element={<Pricing />}/>
      <Route path='SignIn' element={<SignIn />}/>
      <Route path='SignUp' element={<SignUp />}/>
      <Route path='StarProfiles' element={<StarProfiles />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router'
import './index.css'
import { Home } from './modules/home/components/Home.tsx'
import Dashboard from './modules/home/components/Dashboard.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: () => {
      const convId = window.localStorage.getItem('convId')
      console.log('convId - ', convId)
      // if (convId) { return redirect('/dashboard') }

      return null; // Load and return any necessary data
    },
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    loader: () => {
      const convId = window.localStorage.getItem('convId')
      console.log('convId - ', convId)
      // if (!convId) return redirect('/')


      return null
    }
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

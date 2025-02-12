import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContent from './components/MainContent.jsx'
import Header from './components/Header.jsx'
import Services from './components/Services.jsx'
import Resume from './Resume.jsx'
import Work from './Work.jsx'
import Contact from './Contact.jsx'
const router = createBrowserRouter([{
  path: "/",
  element: <App></App>,
  children:[
    { path: '/', 
      element: <MainContent /> }, 
    { path: 'Services', element: <Services /> },
    { path: 'Resume', element: <Resume /> },
    { path: 'Work', element: <Work /> },
    { path: 'Contact', element: <Contact /> },
   
  ]}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)

import { useState } from 'react'
import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Projects from './components/projects/Projects'
import About from './components/about/About'
import RootLayout from './RootLayout';
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'
function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to="/projects" replace />
        },
        {
          path: "/projects",
          element:<Projects></Projects>
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/skills",
          element: <Skills />
        },
         {
          path: "/footer",
          element: <Footer />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={browserRouter}/>
  );
}
export default App

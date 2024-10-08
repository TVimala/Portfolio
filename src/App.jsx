import { useState } from 'react'
import { useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Projects from './components/projects/Projects'
import Resume from './components/resume/Resume'
import About from './components/about/About'
import RootLayout from './RootLayout';
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
          path: "/resume",
          element:<Resume></Resume>
        },
        {
          path: "/about",
          element: <About />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={browserRouter}/>
  );
}
export default App

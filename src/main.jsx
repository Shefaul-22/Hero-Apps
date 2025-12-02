import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router'
import router from './routes/Routes'




createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Suspense fallback={<div className="text-center p-10">Loading...</div>}>

      <RouterProvider router={router}></RouterProvider>

    </Suspense>

  </StrictMode>,
)

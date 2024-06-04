import './global.css'
import { Helmet, HelmetProvider } from "react-helmet-async"
import { Toaster } from 'sonner'

import { ThemeProvider } from "@/components/theme/theme-provider"
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

export function App() {
  

  return (
    <HelmetProvider>
      <ThemeProvider>
        <Helmet titleTemplate='%s | toyotan - mecânica especializada' />
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}



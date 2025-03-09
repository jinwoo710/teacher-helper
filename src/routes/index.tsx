import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Record from './pages/Record'
import DefaultLayout from './layouts/Default'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/record',
        element: <Record />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}

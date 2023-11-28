import { createBrowserRouter } from 'react-router-dom'
import PageCategory from '../pages/PageCategory'
import PageHome from '../pages/PageHome'
import PagePanel from '../pages/PagePanel'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageHome />
    // children: [
    //   {
    //     path: ':categoria',
    //     element: <PageCategory />
    //   }
    // ]
  },
  {
    path: '/:categoria',
    element: <PageCategory />
  },
  {
    path: 'panel',
    element: <PagePanel />
  }
])

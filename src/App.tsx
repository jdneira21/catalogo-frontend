import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import PageCategory from './pages/PageCategory'
import PageHome from './pages/PageHome'

function App() {
  return (
    <div className='h-screen'>
      <Sidebar />
      <Routes>
        <Route path='/' element={<PageHome />} />
        <Route path=':categoria' element={<PageCategory />} />
      </Routes>
      {/* <Sidebar />
      <Outlet />
      <RouterProvider router={router} /> */}
    </div>
  )
}

export default App

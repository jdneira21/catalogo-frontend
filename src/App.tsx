import { RouterProvider } from 'react-router-dom'
import { router } from './router'

function App() {
  return (
    <div className='h-screen'>
      {/* <Routes>
        <Route path='/' element={<PageHome />}>
          <Route path='/:categoria' element={<PageCategory />} />
        </Route>
        <Route path='/panel' element={<PagePanel />} />
      </Routes> */}

      <RouterProvider router={router} />
    </div>
  )
}

export default App

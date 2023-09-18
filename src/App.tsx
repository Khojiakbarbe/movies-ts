
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.scss'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import Favorites from './Pages/Favorites'
import Dashboard from './Pages/Dashboard'


const App: React.FC = () => {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path:'/favorites',
      element:<Favorites />
    },
    {
      path:'/dashboard',
      element:<Dashboard />
    }
  ])

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
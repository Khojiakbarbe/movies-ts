
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.scss'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import Favorites from './Pages/Favorites'
import Dashboard from './Pages/Dashboard'
import Details from './components/Details'
import TV from './Pages/TV'


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
    },
    {
      path:'/details',
      element:<Details />
    },
    {
      path:'/tv',
      element:<TV/>
    }
  ])

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
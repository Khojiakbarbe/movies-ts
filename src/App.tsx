
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.scss'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Favorites from './Pages/Favorites'


const App: React.FC = () => {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path:'/favorites',
      element:<Favorites />
    }
  ])

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
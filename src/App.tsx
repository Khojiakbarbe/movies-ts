import './App.scss'
import Home from './components/Home'
import Navbar from './components/Navbar'


const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
import { Route, Routes } from 'react-router-dom'
import AddGame from './components/AddGame'
import Home from './pages/Home'
import GameDetails from './pages/GameDetails'
import './styles/App.css'
import UpdateGame from './components/UpdateGame'

function App() {
  return (
    <div className="App">
      <header>{/* nav goes here */}</header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addGame" element={<AddGame />} />
          <Route path="/library/:gameId" element={<GameDetails />} />
          <Route path="/updateGame/:gameId" element={<UpdateGame />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

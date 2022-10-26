import { Route, Routes } from 'react-router-dom'
import AddGame from './components/AddGame'
import Home from './pages/Home'

import './styles/App.css'

function App() {
  return (
    <div className="App">
      <header>{/* nav goes here */}</header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addGame" element={<AddGame />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

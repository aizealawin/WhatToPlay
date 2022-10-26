import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App


import Home from './Components/Home'
import NavBar2 from './Components/NavBar2'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Profile from './components/Profile'


function App() {

  return (
    <Router>
      <NavBar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
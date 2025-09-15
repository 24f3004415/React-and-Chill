
import Home from './Components/Home'
import NavBar2 from './Components/NavBar2'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Profile from './Components/Profile'
import SignUp from './Components/SignUp'

function App() {

  return (
    <Router>
      <NavBar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/Signup'  element={ <SignUp /> }></Route>
      </Routes>
    </Router>
  )
}

export default App
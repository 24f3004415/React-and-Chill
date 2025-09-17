
import Home from './Components/Home'
import NavBar2 from './Components/NavBar2'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Profile from './Components/Profile'
import SignUp from './Components/SignUp'
import styles from './App.module.css'
import LogIn from './Components/LogIn'
import MiniDrawer from './Components/MiniDrawer'
import Contact from './Components/Contact'
import Card from './Components/Day-1/Card'

function App() {

  return (
    <Router>
      <NavBar2 />
      <div className={styles.cardscontainers} >
        <Card bname='Mohit'
        job='Digital Solutions'
        phone='9304495153'
        email='mohitrai.thehamiltonacademy@gmail.com'
        image='https://i.pravatar.cc/300
' />
      <Card bname='Mohit'
        job='Digital Solutions'
        phone='9304495153'
        email='mohitrai.thehamiltonacademy@gmail.com'
        image='https://i.pravatar.cc/300
' />
      <Card bname='Mohit'
        job='Digital Solutions'
        phone='9304495153'
        email='mohitrai.thehamiltonacademy@gmail.com'
        image='https://i.pravatar.cc/300
' />
      <Card bname='Mohit'
        job='Digital Solutions'
        phone='9304495153'
        email='mohitrai.thehamiltonacademy@gmail.com'
        image='https://i.pravatar.cc/300
' />
      </div>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/Signup' element={<SignUp />}></Route>
        <Route path='/Login' element={<LogIn />}></Route>
        <Route path='/MiniDrawer' element={<MiniDrawer />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>

      </Routes>
    </Router>
  )
}

export default App
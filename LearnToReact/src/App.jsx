
import Home from './Components/Home'
import NavBar2 from './Components/NavBar2'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Profile from './Components/Profile'
import SignUp from './Components/SignUp'
import styles from './App.module.css'
import LogIn from './Components/LogIn'
import MiniDrawer from './Components/MiniDrawer'
import Contact from './Components/Contact'
import JobList from './Components/Day-3/JobList'
import CardContain from './Components/Day-1/CardContain'
import ContactList from './Components/Day-4/ContactList'
import Stopwatch from './Components/Day-5/Stopwatch'
import Jokeapi from './Components/Day-6/Jokeapi'

function App() {

  return (
    <Router>
      <NavBar2 />
      
      <div  >
        


      

      </div>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/job' element={<JobList />} />
        <Route path='/card' element={<CardContain />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/Signup' element={<SignUp />}></Route>
        <Route path='/Login' element={<LogIn />}></Route>
        <Route path='/MiniDrawer' element={<MiniDrawer />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/JobList' element={<JobList  />}></Route>
        <Route path='/ContactList' element={<ContactList  />}></Route>
        <Route path='/Joke' element={<Jokeapi  />}></Route>

      </Routes>
    <Stopwatch />

    </Router>
  )
}

export default App
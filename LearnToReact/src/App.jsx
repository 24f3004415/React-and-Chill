import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import NavBar from './Components/NavBar'
import NavBar2 from './Components/NavBar2'


function App() {
  const [count, setCount] = useState(0)
  // first value i.e., count stores the current value and the second value i.e., setcount is used to update the first value.

  return (
    <div>
      <NavBar></NavBar>
      {/* <NavBar2 /> */}
    </div>
  )
}

export default App

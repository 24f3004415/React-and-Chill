import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SideBar from './components/SideBar'
import CreatePost from './components/CreatePost'

const App = () => {
  return (
    <div className='appContainer' >
      <SideBar></SideBar>
      <div className="content">
        <Header></Header>
        <CreatePost></CreatePost>
        <Footer></Footer>
      </div>

    </div>
  )
}

export default App

import React from 'react'
import { PostProvider } from './context/postContext'
import PostUpload from './components/PostUpload'

const App = () => {
  return (
    <PostProvider>

      <div>
        <h1> Our Posts </h1>
        <PostUpload></PostUpload>
      </div>
      
    </ PostProvider>
  )
}

export default App

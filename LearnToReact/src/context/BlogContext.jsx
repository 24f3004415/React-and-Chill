import React, { useState } from 'react'
import { createContext } from 'react';



export const BlogContext = createContext();



export const BlogProvider = ({ children }) => {

    const [user, setUser] = useState('Mohit Rai')

    const [blogs, setBlogs] = useState([
        {
            id: 1, title: "My first Blog", content: 'This is a blog content'
        },
        {
            id: 2, title: "Learning React", content: 'This is a React js framework thank you and have a nice day!!'
        }
    ])

    const addblog = (title, content)=>{
        const newBlog={
            id: blogs.length+1,
            title,
            content
        }

        setBlogs([newBlog, ...blogs])
    }

    const updateUser = (newname) =>{
        setUser(newname)
    }

    return (
        <BlogContext.Provider value={{ user, blogs,updateUser, addblog }} >
            {children}
        </ BlogContext.Provider>
    )
}


export default BlogContext

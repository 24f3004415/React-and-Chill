import React, { createContext, useEffect, useState } from 'react'

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]); //fetched from api
    const [userPosts, setUserPosts] = useState([]); // from logic

    //Fetching data from api

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
            .then((res) => res.json()).then((data) => setPosts(data))
    })

    //function for user post

    const addPost = (caption, image) => {
        const newPost = {
            id: Date.now(),
            caption,
            image,
            user: "Mohit"
        }
        setUserPosts([newPost, ...userPosts, ...posts]);
    }

    return (
        <PostContext.Provider value={{ userPosts, addPost }}>
            {children}
        </PostContext.Provider>
    )
}

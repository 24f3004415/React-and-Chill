import React, { useContext } from 'react'
import BlogContext, { BlogProvider } from '../../context/BlogContext';
import { useState } from 'react';

const BlogList = () => {

    const [newuser, setNewuser] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const { user, blogs, updateUser, addBlog } = useContext(BlogContext);

    const handleNewUser = () => {
        if (newuser.trim() === "") {
            alert("Please enter name")
        }

        updateUser(newuser);
        setNewuser("");
    }

    const handleAddBlog = (e) => {
        e.preventDefault();
        if (content.trim() && title.trim()) {
            addBlog(title, content);
            setTitle("");
            setContent("")


        }
        else {
            alert("Please fill all fields")
        }
    }

    return (

        <div>
            <h1>Welcome {user}</h1>
            <h3>Our Blogs</h3>

            <div className='bg-blue-400 border'>
                <input type="text"
                    placeholder='User'
                    value={newuser}
                    onChange={(e) => setNewuser(e.target.value)} />

                <button
                    onClick={handleNewUser}>
                    Update user
                </button>



                <h2>Blog Form</h2>
                <form onSubmit={handleAddBlog}>
                    <input type="text"
                        placeholder='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />

                    <textarea
                        rows="3"
                        placeholder='content '
                        value={content}
                        onChange={(e) => setContent(e.target.value)}></textarea>

                    <button type='submit'>Add Blog</button>
                </form>
            </div>

            {
                blogs.map((blogs) => (
                    <div key={blogs.id} style={{ background: "pink", padding: "10px", margin: "10px", borderRadius: "10px" }}>
                        <h4>{blogs.title}</h4>
                        <p>{blogs.content}</p>

                    </div>
                ))
            }
        </div>

    )
}

export default BlogList
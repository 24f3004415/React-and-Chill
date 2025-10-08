import React, { useContext, useState } from 'react'
import { PostContext } from '../context/postContext';

const PostUpload = () => {

    const [caption, setCaption] = useState('');
    const [imagepreview, setImagepreview] = useState(null);

    const { addPost } = useContext(PostContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!caption || !imagepreview) {
            alert('please enter the caption and image preview');
            return
        }

        addPost(caption, imagepreview);
        setCaption('');
        setImagepreview(null);
    }


    const handleImageChange = () => {
        const file = e.target.files[0]
        if (file) {
            const imgurl = URL.createObjectURL(file);
            setImagepreview(imgurl)
        }
        else {
            alert('Please ensure you have choosen correct file')
        }
    }
    return (
        <div>
            <h3>Posts</h3>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder='Write caption'
                    value={caption}
                    onChange={(e) => e.target.value} />

                <input type="file"
                    accept='image/'
                    onChange={handleImageChange} />

                <button type='submit'>
                    Add Post
                </button>
            </form>
        </div>
    )
}

export default PostUpload

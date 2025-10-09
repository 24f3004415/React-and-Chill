import { useReducer } from "react";
import { createContext } from "react";


const DEFAULT_CONTEXT = {
    postList: [],
    addPost: () => { },
    deletePost: () => { }
}
const PostList = createContext(DEFAULT_CONTEXT)

const postListReducer = (currentPostList, action) => {
    return (
        currentPostList
    )
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostlist] = useReducer(postListReducer, [])

    const addPost = () => {

    }
    const deletePost = () => {

    }
    return (
        <PostList.Provider value={{postList,addPost,deletePost}} >
            {children}
        </PostList.Provider>
    )
}

export default PostListProvider
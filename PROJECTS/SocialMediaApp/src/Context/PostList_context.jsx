import { useReducer } from "react";
import { createContext } from "react";


const DEFAULT_CONTEXT = {
    postList: [],
    addPost: () => { },
    deletePost: () => { }
}


export const PostList = createContext(DEFAULT_CONTEXT)


// This is the function coming from useReducer to manage the state of postList
const postListReducer = (currentPostList, action) => {
    return (
        currentPostList
    )
}


const PostListProvider = ({ children }) => {

    const [postList, dispatchPostlist] = useReducer(postListReducer, DEFAULT_POST_LIST)

    const addPost = () => {

    }
    const deletePost = () => {

    }
    return (
        <PostList.Provider value={{ postList, addPost, deletePost }} >
            {children}
        </PostList.Provider>
    )
}
const DEFAULT_POST_LIST = [
    {
        id: "1",
        title: "This is my first post!",
        body: "Hello everyone! Excited to join this platform and share my thoughts.",
        reactions: 5,
        userId: "user123",
        tags: ["introduction", "firstpost"]
    },
    {
        id: "2",
        title: "This is my second post!",
        body: "Hello everyone! Excited to join this platform and share my thoughts.Peace out. have a nice day",
        reactions: 55,
        userId: "user321",
        tags: ["introduction", "firstpost", "secondpost", "greeting"]
    }

]
export default PostListProvider



// useReducer hook manages state using the reducer function
// postList: Current state (starts as empty array [])
// dispatchPostlist: Function to trigger state updates
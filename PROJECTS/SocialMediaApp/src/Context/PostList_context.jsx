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
const DEFAULT_POST_LIST =
    [
        {
            id: "1",
            title: "Just finished my React project! 🚀",
            body: "After weeks of hard work, finally deployed my first full-stack social media app. Learned so much about Context API, useReducer, and component architecture. Feeling accomplished!",
            reactions: 42,
            userId: "dev_rahul",
            tags: ["#react", "#webdev", "#milestone", "#coding"]
        },
        {
            id: "2",
            title: "Morning motivation ☀️",
            body: "Remember, every expert was once a beginner. Don't give up on your coding journey. Keep learning, keep building!",
            reactions: 128,
            userId: "tech_inspiration",
            tags: ["#motivation", "#coding", "#inspiration"]
        },
        {
            id: "3",
            title: "Best VS Code extensions in 2024?",
            body: "Looking for productivity-boosting extensions for React development. What are your must-haves? Currently using ES7 snippets and Prettier. Drop your recommendations below! 👇",
            reactions: 67,
            userId: "priya_codes",
            tags: ["#vscode", "#productivity", "#tools", "#react"]
        },
        {
            id: "4",
            title: "Weekend vibes! 🎮",
            body: "Taking a break from coding to play some games. Balance is important! What are you all up to this weekend?",
            reactions: 89,
            userId: "gamer_dev",
            tags: ["#weekend", "#gaming", "#worklifebalance"]
        },
        {
            id: "5",
            title: "Tailwind CSS is a game changer!",
            body: "Switched from traditional CSS to Tailwind and I'm never going back. The utility-first approach makes styling so much faster. Highly recommend giving it a try!",
            reactions: 156,
            userId: "css_ninja",
            tags: ["#tailwind", "#css", "#webdev", "#frontend"]
        }
    ]


export default PostListProvider



// useReducer hook manages state using the reducer function
// postList: Current state (starts as empty array [])
// dispatchPostlist: Function to trigger state updates
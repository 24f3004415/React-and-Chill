import React from "react";
import { Post } from "./Post";

const PostList = () => {
    return (
        <div className="flex flex-col items-center  min-h-screen py-6">
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default PostList;

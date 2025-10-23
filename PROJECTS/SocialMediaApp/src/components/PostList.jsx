import React, { useContext } from "react";
import { Post } from "./Post";
import { PostList as PostListData } from "../Context/PostList_context";

const PostList = () => {

    const { postList } = useContext(PostListData);


    return (
        <div className="flex flex-col items-center  min-h-screen py-6 ">
            {postList.map((post, index) => <Post key={post.id} post={post} />)}
        </div>
    );
};

export default PostList;

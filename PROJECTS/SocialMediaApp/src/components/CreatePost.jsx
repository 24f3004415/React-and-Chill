import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"
import { useContext, useRef } from "react";
import { PostList } from "../Context/PostList_context";

const CreatePost = () => {

    const { addPost } = useContext(PostList);

    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postContentElement = useRef();
    const hashtagsElement = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postContent = postContentElement.current.value;
        const hashtags = hashtagsElement.current.value.split(" ");    

        addPost(userId, postTitle, postContent, hashtags);

        // Clear the form fields after submission
        userIdElement.current.value = '';
        postTitleElement.current.value = '';
        postContentElement.current.value = '';
        hashtagsElement.current.value = '';
        
        
    }

    return (
        <Card className="w-full max-w-sm border-2  mt-6 shadow-2xl shadow-yellow-500/60">
            <CardHeader>
                <CardTitle>Create Post</CardTitle>
                <CardDescription>
                    Enter your post details below to create a post...
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="userid">userId:</Label>
                            <Input id="userid" type="text" ref={userIdElement} placeholder="Enter your userId" required />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="title">Post Title:</Label>
                            <Input id="title" ref={postTitleElement} type="text" placeholder="How are you feeling today..." required />
                        </div>

                        <div className="grid w-full gap-3">
                            <Label htmlFor="content">Enter caption:</Label>
                            <Textarea ref={postContentElement} placeholder="Type your caption here..." id="content" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="tags">Enter Hashtags:</Label>
                            <Input ref={hashtagsElement} id="tags" type="text" placeholder="Enter multiple hashtags using sapce..." required />
                        </div>

                    </div>
                </form>
            </CardContent>

            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full" onClick={handleSubmit} >
                    Create Post
                </Button>

            </CardFooter>
        </Card>
    );
};

export default CreatePost;


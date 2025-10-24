import React, { useContext } from "react";
import { Button } from "@/components/ui/button"
import { Trash } from 'lucide-react';
import {
    Item,
    ItemContent,
    ItemDescription,
    ItemHeader,
    ItemTitle,
} from "@/components/ui/item";
import { Badge } from "@/components/ui/badge";
import { PostList } from "../Context/PostList_context";

export function Post({ post }) {

    const { deletePost } = useContext(PostList);

    return (
        <div className="w-full max-w-xl mx-auto my-4 ">
            <Item className=" rounded-2xl shadow-sm hover:shadow-md transition p-4 bg-gradient-to-r from-slate-300 to-slate-500">

                {/* Post Header (User Info) */}
                <ItemHeader className="flex items-center gap-3 border-b pb-3">
                    <div>
                        <h3 className="font-semibold text-sm text-black">{post.userId}</h3>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>


                    <button onClick={ ()=>deletePost(post.id) }>
                        <a  className="relative inline-block text-base group">
                            <span className="relative z-10 flex items-center gap-2 px-1 py-1 overflow-hidden font-medium leading-tight text-white transition-colors duration-800 ease-out border border-gray-900 rounded-md group-hover:text-black">
                                <span className="absolute inset-0 w-full h-full rounded-md bg-gray-50"></span>
                                <span className="absolute left-0 w-32 h-32 -ml-2 transition-all duration-700 origin-top-right -rotate-90 -translate-x-full translate-y-8 bg-orange-800 group-hover:-rotate-180 ease"></span>
                                <span className="relative flex items-center gap-1">
                                    <Trash className="w-4 h-4" /> Delete
                                </span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-md group-hover:mb-0 group-hover:mr-0" />
                        </a>
                    </button>


                </ItemHeader>

                {/* Post Content */}
                <ItemContent className="mt-3">
                    <ItemTitle className="text-lg font-semibold text-black">
                        {post.title}
                    </ItemTitle>
                    <ItemDescription className="text-sm mt-2 text-black">
                        {post.body}
                    </ItemDescription>

                    {/* <-- wrapper with flex + gap */}
                    <div className="flex flex-wrap gap-2 mt-3 items-center">
                        {post.tags.map((BadgeIter, index) => (
                            // force inline display on the Badge component in case it defaults to block
                            <Badge key={index} variant="secondary" className="hover:-translate-y-1 transition-transform duration-300 ease-in-out  " >
                                {BadgeIter}
                            </Badge>
                        ))}
                    </div>
                </ItemContent>
            </Item>
        </div>
    );
}

import React from "react";
import {
    Item,
    ItemContent,
    ItemDescription,
    ItemHeader,
    ItemTitle,
} from "@/components/ui/item";
import { Badge } from "@/components/ui/badge";

export function Post({ post }) {
    return (
        <div className="w-full max-w-xl mx-auto my-4">
            <Item className="border rounded-2xl shadow-sm hover:shadow-md transition p-4 bg-gradient-to-r from-slate-300 to-slate-500">
                {/* Post Header (User Info) */}
                <ItemHeader className="flex items-center gap-3 border-b pb-3">
                    <div>
                        <h3 className="font-semibold text-sm text-black">{post.userId}</h3>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
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
                            <Badge key={index} variant="secondary" >
                                {BadgeIter}
                            </Badge>
                        ))}
                    </div>
                </ItemContent>
            </Item>
        </div>
    );
}

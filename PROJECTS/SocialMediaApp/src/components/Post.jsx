import React from "react";
import {
    Item,
    ItemContent,
    ItemDescription,
    ItemHeader,
    ItemTitle,
} from "@/components/ui/item";

export function Post() {
    return (
        <div className="w-full max-w-xl mx-auto my-4">
            <Item className="border rounded-2xl shadow-sm  hover:shadow-md transition p-4  bg-gradient-to-r from-slate-300 to-slate-500">

                {/* Post Header (User Info) */}
                <ItemHeader className="flex items-center gap-3 border-b pb-3">
                    <div>
                        <h3 className="font-semibold text-sm text-black">Mohit rai</h3>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                </ItemHeader>

                {/* Post Content */}
                <ItemContent className="mt-3">
                    <ItemTitle className="text-lg font-semibold text-black">
                        Just finished my new project! 🚀
                    </ItemTitle>
                    <ItemDescription className="text-sm  mt-2 text-black">
                        It’s a social media platform built with React and Tailwind CSS.
                        Feeling super excited to share it with you all!
                    </ItemDescription>

                    {/* Optional Image */}
                    <div className="mt-3 rounded-lg overflow-hidden">

                    </div>
                </ItemContent>
            </Item>
        </div>
    );
}

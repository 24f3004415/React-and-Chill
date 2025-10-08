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
            <Item className="border rounded-2xl shadow-sm  hover:shadow-md transition p-4">

                {/* Post Header (User Info) */}
                <ItemHeader className="flex items-center gap-3 border-b pb-3">
                    <div>
                        <h3 className="font-semibold text-sm">Mohit rai</h3>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                </ItemHeader>

                {/* Post Content */}
                <ItemContent className="mt-3">
                    <ItemTitle className="text-lg font-semibold">
                        Just finished my new project! 🚀
                    </ItemTitle>
                    <ItemDescription className="text-sm text-gray-600 mt-2">
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

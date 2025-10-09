import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Header from "./components/Header"
import CreatePost from "./components/CreatePost"
import PostList from "./components/PostList"
import { useState } from "react"
import PostListProvider from "./Context/PostList_context"


export default function App({ children }) {

  const [selectedTab, setSelectedTab] = useState('Create Post')

  return (
    <PostListProvider>
      <div className="border-2  grid grid-cols-[auto_1fr]">

        {/* Sidebar */}
        <div className="SideBar border-3 ">
          <SidebarProvider >
            <AppSidebar selectedTab={selectedTab} onTabChange={(tab) => setSelectedTab(tab)} />
            <main className="">
              <SidebarTrigger className="fixed" />
              {children}
            </main>
          </SidebarProvider>
        </div>

        {/* Header + Content */}
        <div >
          <Header />
          {/* rest of your main content here */}
          <center>
            {selectedTab === 'Home' ? <PostList></PostList> : <CreatePost></CreatePost>}
          </center>
        </div>

      </div>
    </PostListProvider>

  )
}
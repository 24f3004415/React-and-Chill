import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Header from "./components/Header"
import CreatePost from "./components/CreatePost"
import PostList from "./components/PostList"


export default function App({ children }) {
  return (
    <div className="border-2  grid grid-cols-[auto_1fr]">

      {/* Sidebar */}
      <div className="SideBar border-3 ">
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger className="size-sm" />
            {children}
          </main>
        </SidebarProvider>
      </div>

      {/* Header + Content */}
      <div >
        <Header />
        {/* rest of your main content here */}
        <center className="mt-20">
          <CreatePost></CreatePost>
          <PostList></PostList>
        </center>
      </div>

    </div>

  )
}
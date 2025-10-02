import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Header from "./components/Header"


export default function App({ children }) {
  return (
    <div className="border-2  grid grid-cols-[auto_1fr]">
      {/* Sidebar */}
      <div className="SideBar border-3">
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger className="size-sm" />
            {children}
          </main>
        </SidebarProvider>
      </div>

      {/* Header + Content */}
      <div>
        <Header />
        {/* rest of your main content here */}
      </div>
    </div>

  )
}
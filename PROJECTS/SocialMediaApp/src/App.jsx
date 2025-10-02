import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function App({ children }) {
  return (
    <div>
      <div className="SideBar">
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger className='size-sm' />
            {children}
          </main>
        </SidebarProvider>
      </div>
    </div>
  )
}
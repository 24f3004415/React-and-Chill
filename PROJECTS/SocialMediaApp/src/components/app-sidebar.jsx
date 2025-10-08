import { House, Inbox, Search, Settings, BadgePlus } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"


// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: House,
  },
  {
    title: "Create Post",
    url: "#",
    icon: BadgePlus,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  }
]

export function AppSidebar({ selectedTab, onTabChange }) {
  return (
    <Sidebar variant='floating' collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel >My Social Media</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild onClick={() => onTabChange(item.title)}
                    className={`cursor-pointer ${selectedTab === item.title
                        ? "bg-blue-500 text-white"
                        : "hover:bg-blue-500 "}`} >
                    <div className="flex items-center gap-2 p-2 rounded-md">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
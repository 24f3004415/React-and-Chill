import React from 'react'
import { SidebarInput } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <div className="flex items-center justify-center gap-2 p-2  border-2 ">
      {/* Search input */}
      <SidebarInput 
        placeholder="Type to search..." 
        className="w-64"   // adjust width as needed (w-48, w-80, etc.)
      />

      {/* Buttons */}
      <Button variant="default">LogIn</Button>
      <Button variant="default">SignUp</Button>
    </div>
  )
}

export default Header


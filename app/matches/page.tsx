'use client'

import NavBar from '@/components/Navbar'
import SideBar from '@/components/Sidebar'
import React, { useState } from 'react'

export default function UserMatches() {

  return (
    <div className="flex">
    <SideBar />
    <div className="pl-64 w-full">
      {/* Add your main content here */}
      <div>Matches</div>
    </div>
  </div>
  )
}

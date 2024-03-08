'use client'

import NavBar from '@/components/ArchiveNavBar'
import SideBar from '@/components/Sidebar'
import React, { useState } from 'react'

export default function UserFriends() {

  return (
    <div className="flex">
    <SideBar />
    <div className="pl-64 w-full">
      {/* Add your main content here */}
      <div>Friends</div>
    </div>
  </div>
  )
}

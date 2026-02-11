import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/students/Navbar'

const StudentLayout = () => {
  return (
    <div className="text-default min-h-screen bg-white">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default StudentLayout

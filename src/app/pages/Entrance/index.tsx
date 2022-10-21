import AppNavigator from 'app/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function EntryPage() {
  return (
    <div>
      <AppNavigator />

      <Outlet />
    </div>
  )
}

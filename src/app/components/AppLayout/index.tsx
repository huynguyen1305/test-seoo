import React from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from '../AppHeader'
import AppFooter from '../AppFooter'

import 'assets/styles/global.scss'

function AppLayout() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        minHeight: '100vh'
      }}
    >
      <AppHeader />
      <main style={{ flex: 1 }}>
        <div style={{ width: '100%', height: '100%' }}>
          <Outlet />
        </div>
      </main>
      <AppFooter />
    </div>
  )
}

export default AppLayout

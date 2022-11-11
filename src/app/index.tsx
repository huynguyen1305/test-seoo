import { withTranslation } from 'react-i18next'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Page1 from 'app/pages/Page1/index'

import AppThemeProvider from './theme'
import HomePage from './pages/HomePage'
import AppLayout from './components/AppLayout'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="page1" element={<Page1 />} />

            {/* Handle Error Page with code */}
            <Route path=":code" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppThemeProvider>
  )
}

export { App }
export default withTranslation()(App)

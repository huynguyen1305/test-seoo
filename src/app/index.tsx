// Use global style
import 'styles/global.scss'

import { withTranslation } from 'react-i18next'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Helmet } from 'react-helmet-async'

import Landing from 'app/pages/HomePage'
import NotFoundPage from 'app/components/NotFoundPage'
import {
  ABOUT,
  API,
  APPLICATION,
  DOC,
  FORUM,
  MY_APP,
  SUPPORT
} from 'common/routes'
import AppThemeProvider from './theme'
import AboutPage from './pages/About'
import Document from './pages/Document'
import Api from './pages/Api'
import Support from './pages/Support'
import Forum from './pages/Forum'
import Application from './pages/Application'
import MyApp from './pages/MyApp'
import EntryPage from './pages/Entrance'

function App({ i18n }) {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
          htmlAttributes={{ lang: i18n?.language || 'en' }}
        >
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>

        <Routes>
          <Route element={<EntryPage />}>
            <Route index element={<Landing />} />
            <Route path={ABOUT} element={<AboutPage />} />
            <Route path={DOC} element={<Document />} />
            <Route path={API} element={<Api />} />
            <Route path={SUPPORT} element={<Support />} />
            <Route path={FORUM} element={<Forum />} />
            <Route path={APPLICATION} element={<Application />} />
            <Route path={MY_APP} element={<MyApp />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppThemeProvider>
  )
}

export { App }
export default withTranslation()(App)

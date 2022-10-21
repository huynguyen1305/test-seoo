import React from 'react'
import { withTranslation } from 'react-i18next'

export function Landing({ t }) {
  return (
    <div>
      {t('landing.title')}
      my landing page
    </div>
  )
}

export default withTranslation()(Landing)

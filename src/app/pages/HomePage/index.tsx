import AppSEO from 'app/components/AppSEO'
import React from 'react'
import { withTranslation } from 'react-i18next'

export function HomePage() {
  return (
    <>
      <AppSEO
        title="Home"
        description={`넥슨 지스타 2022 공식 사이트 - 귀환 시연작 '퍼스트 디센던트', '마비노기 모바일', '카트라이더: 드리프트', '데이브 더 다이버' 외 다양한 게임을 만나보세요.`}
      >
        <meta property="og:title" content="NEXON G-STAR 2022" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gstar.nexon.com"></meta>
        <meta
          property="og:image:secure_url"
          content="https://gstar.nexon.com/photo/Global/OG_image.png"
        ></meta>
        <meta
          property="og:image"
          content="https://gstar.nexon.com/photo/Global/OG_image.png"
        ></meta>
        <meta
          property="og:description"
          content="넥슨 지스타 2022 공식 사이트 - 귀환 시연작 '퍼스트 디센던트', '마비노기 모바일', '카트라이더: 드리프트', '데이브 더 다이버' 외 다양한 게임을 만나보세요."
        ></meta>
      </AppSEO>
      <div>Hello</div>
    </>
  )
}

export default withTranslation()(HomePage)

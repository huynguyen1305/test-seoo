import React from 'react'
import { Helmet } from 'react-helmet-async'

type Props = {
  title: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
  locale?: string
  children?: React.ReactNode
}

function AppSEO(props: Props) {
  const siteName = 'React Boilerplate'
  const { children, title, description, keywords } = props
  return (
    <Helmet>
      <title>
        {title} | {siteName}
      </title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {/* {locale && <meta property="og:locale" content={locale} />}
      {type && <meta property="og:type" content={type} />}
      {url && <meta property="og:url" content={url} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:secure_url" content={image} />}
      {image && <meta property="og:image:width" content="1200" />}
      {image && <meta property="og:image:height" content="630" />}
      {image && <meta property="og:image:alt" content={title} />}
      {image && <meta property="twitter:image" content={image} />}
      {image && <meta property="twitter:image:alt" content={title} />}
      {image && <meta property="twitter:card" content="summary_large_image" />}
      {image && <meta property="twitter:site" content="@react-boilerplate" />}
      {image && (
        <meta property="twitter:creator" content="@react-boilerplate" />
      )}
      {image && (
        <meta property="twitter:domain" content="react-boilerplate.com" />
      )}
      {image && <meta property="twitter:title" content={title} />}
      {image && <meta property="twitter:description" content={description} />}
      {image && <meta property="twitter:image:width" content="1200" />}
      {image && <meta property="twitter:image:height" content="630" />} */}

      {children}
    </Helmet>
  )
}

AppSEO.defaultProps = {
  description:
    'Mantine is a React UI library with a focus on developer experience',
  keywords: 'react, ui, library, components, hooks, developer, experience',
  image: 'https://mantine.dev/mantine.png',
  url: 'https://mantine.dev',
  type: 'website',
  locale: 'en_US',
  children: null
}

export default AppSEO

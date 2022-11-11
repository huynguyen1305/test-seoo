import React, { useEffect, useState } from 'react'
import { Title, Text, Box, Image } from '@mantine/core'
import AppSEO from 'app/components/AppSEO'
import { useParams } from 'react-router-dom'

import img400 from 'assets/images/400.png'
import img404 from 'assets/images/404.png'
import img500 from 'assets/images/500.png'
import img503 from 'assets/images/503.png'

const listErrPage = [
  {
    code: '404',
    title: 'Page not found',
    description:
      'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
    img: img404
  },
  {
    code: '400',
    title: 'Client error',
    description:
      'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
    img: img400
  },
  {
    code: '500',
    title: 'Internal Server Error',
    description:
      'The server encountered an internal error or misconfiguration and was unable to complete your request.',
    img: img500
  },
  {
    code: '503',
    title: 'Service Unavailable',
    description:
      'The server is temporarily unable to service your request due to maintenance downtime or capacity problems. Please try again later.',
    img: img503
  }
]

export default function ErrorPage() {
  const [errPage, setErrPage] = useState(listErrPage[0])
  const params = useParams()

  useEffect(() => {
    if (params.code) {
      switch (params.code) {
        case '400': {
          setErrPage(listErrPage[1])
          break
        }
        case '500': {
          setErrPage(listErrPage[2])
          break
        }
        case '503': {
          setErrPage(listErrPage[3])
          break
        }

        default:
          setErrPage(listErrPage[0])
          break
      }
    }
  }, [])

  return (
    <>
      <AppSEO title={errPage.title} description={errPage.description} />

      <Box
        sx={theme => ({
          backgroundColor: 'white',
          textAlign: 'center',
          padding: theme.spacing.xl,
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%'
        })}
      >
        <Image
          src={errPage.img}
          width={300}
          alt={errPage.code}
          sx={{ margin: '8px auto' }}
        />
        <Title color="red" order={3}>
          {errPage.title}
        </Title>
        <Text size="xl" color="gray">
          {errPage.description}
        </Text>
      </Box>
    </>
  )
}

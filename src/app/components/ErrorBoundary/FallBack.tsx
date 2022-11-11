import { Center, Container, Title, Text, Anchor, Stack } from '@mantine/core'
import { LANDING } from 'common'
import React from 'react'
import AppSEO from '../AppSEO'

export default function FallBack() {
  return (
    <Container className="h-screen">
      <AppSEO title="Page 404 Not Found" description="Page Error 404" />

      <Center className="h-full items-center justify-center scale-150">
        <Stack align="center">
          <div className="flex items-center gap-2 ">
            <Title>
              4
              <span role="img" aria-label="Crying Face">
                😢
              </span>
              4
            </Title>
            <Text>Please contact page admin</Text>
          </div>
          <Anchor href={LANDING}>Back to homepage</Anchor>
        </Stack>
      </Center>
    </Container>
  )
}

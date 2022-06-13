import { Box } from '@chakra-ui/react'
import React from 'react'
import Navigation from './Navigation'

export default function Layout({children}) {
  return (
    <>
    <Navigation />
    <Box as="main">
      {children}
    </Box>
    </>
  )
}

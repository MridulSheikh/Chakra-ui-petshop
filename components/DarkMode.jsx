import React from 'react'
import {IconButton, Tooltip, useColorMode} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function DarkMode() {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Tooltip hasArrow label={colorMode === 'dark' ? 'Make light mode' : 'Make Dark Mode'} aria-label='A tooltip'>
      <IconButton
       icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
       onClick={toggleColorMode}
       textColor="white"
       colorScheme="gray.500"
        fontSize="30px"
   />
    </Tooltip>
  )
}

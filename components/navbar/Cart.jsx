import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    IconButton,
    useColorMode,
  } from '@chakra-ui/react'
  import {BsCart4} from 'react-icons/bs'

export default function Cart() {
  const { colorMode} = useColorMode();
  const backgroundColor = colorMode === "dark" ? "dercula" : "yellow.500";
  return (
    <Popover>
     <PopoverTrigger>
       <IconButton colorScheme="grya.500" backgroundColor={backgroundColor} textColor="white" fontSize="30px" icon={<BsCart4 />}>Trigger</IconButton>
     </PopoverTrigger>
    <PopoverContent>
      <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
       <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
    </PopoverContent>
   </Popover>
  )
}

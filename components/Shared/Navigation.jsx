import React from 'react';
import { HStack, Flex, Box, Image, Text, Button, IconButton, Tooltip, useColorMode} from '@chakra-ui/react';
import Link from 'next/link';
import Cart from '../navbar/Cart';
import DarkMode from '../DarkMode'
import {AiOutlineLogin, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter} from 'react-icons/ai'

export default function Navigation() {
    const { colorMode} = useColorMode();
    const backgroundColor = colorMode === "dark" ? "dercula" : "yellow.500";
  return (
    <>
    <HStack justifyContent="space-between" backgroundColor={backgroundColor} position="fixed" top="0" zIndex="100" width="100%" px={5}>
        <Flex flexDirection="colum" ms={6}>
           <a href="https://www.facebook.com/" target="blank">
            <Tooltip hasArrow label="instagram account">
               <IconButton
                icon={<AiOutlineInstagram />}
                backgroundColor={backgroundColor}
                textColor="white"
                fontSize="30px"
                colorScheme="gray.500"
                />
            </Tooltip>
           </a>
           <a href="https://www.instagram.com/" target="blank">
            <Tooltip hasArrow label="facebook account" aria-label='A tooltip'>
               <IconButton
                icon={<AiOutlineFacebook />}
                backgroundColor={backgroundColor}
                textColor="white"
                fontSize="30px"
                colorScheme="gray.500"
                />
            </Tooltip>
           </a>
           <a href="https://www.twitter.com/" target="blank">
            <Tooltip hasArrow label="twitter account" aria-label='A tooltip'>
               <IconButton
                icon={<AiOutlineTwitter />}
                backgroundColor={backgroundColor}
                textColor="white"
                fontSize="30px"
                colorScheme="gray.500"
                />
            </Tooltip>
           </a>
        </Flex>
     <Flex 
     justifyContent="center" 
     >
        <Flex flexDirection="colum" alignItems="center" textColor="white">
            <Text cursor="pointer">
                <Link href="/story">
                  STORY
                </Link>
            </Text>
            <Text cursor="pointer" ms={6}>
                <Link href="/pets">
                   PETS
                </Link>
            </Text>
            <Text cursor="pointer" ms={6}>
                <Link href="/pets">
                    TEAM
                </Link>
            </Text>
         </Flex>
        <Box cursor="pointer" mx={2}>
            <Image src='/Logo.jpg' boxSize={100} />
        </Box>
        <Flex flexDirection="colum" alignItems="center" textColor="white">
            <Text cursor="pointer">
                <Link href="/faq">
                  FAQ
                </Link>
            </Text>
            <Text cursor="pointer" ms={6}>
                <Link href="/service">
                   SERVICE
                </Link>
            </Text>
            <Text cursor="pointer" ms={6}>
                <Link href="/contact">
                    CONTACT
                </Link>
            </Text>
         </Flex>
    </Flex>
    <Flex pe={6}>
        <Box me={5}>
            <DarkMode />
        </Box>
       <Box me={5}>
          <Cart />
       </Box>
       <Box>
        <Link href="/login">
         <IconButton 
          icon={<AiOutlineLogin />}
          fontSize="30px"
          textColor="white"
          colorScheme="gray.500"
          />
        </Link>
       </Box>
    </Flex>
    </HStack>
    </>
  )
}

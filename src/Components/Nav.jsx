import { Avatar, Badge, Box, Button, Flex, HStack, Icon, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import useAuth from '../Utilities/useAuth';
export default function Nav() {
  const { logOut, user } = useAuth()
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const noti = 'You have new request'
  return <Box>
    <Flex alignItems='center' p='3'>
      <HStack spacing='24px'>
        <Avatar size='md' onClick={handleClick} name={user.name} src='https://bit.ly/broken-link' />
        <Link to='/' mr='4' px='4'>Home</Link>
        <Link to='/forum' px='4'>Forum</Link>

        <Menu>
          <MenuButton  >
            <Icon mt='3' w={7} h={6} color="gray.600" as={IoNotificationsOutline}  ></Icon>
          </MenuButton>
          <MenuList>
            <MenuGroup textAlign='left' title='Notifications'>

              <MenuItem>  <Badge variant='subtle' colorScheme='green'>New </Badge> <Text>{noti}</Text></MenuItem>
            </MenuGroup>

          </MenuList>
        </Menu>
        <Menu>
          <MenuButton  >
            <Icon mt='3' w={8} h={7} color="teal.500" as={AiFillCaretDown} />
          </MenuButton>
          <MenuList>
            <MenuGroup title='Profile'>
              <MenuItem><Link to='/profile'> My Account </Link></MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuItem><Button variant='link' onClick={() => { logOut() }}>Log out</Button></MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  </Box>
}

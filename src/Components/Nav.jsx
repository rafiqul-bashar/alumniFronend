import { Button, Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Utilities/useAuth';

export default function Nav() {
  const { logOut } = useAuth()
  return <Flex alignItems='center'>
<HStack spacing='24px'>
    
    <Link to='/home' mr='4' px='4'>Home</Link>
    <Link to='/profile' px='4'>Profile</Link>

  </HStack>
    <Button ml={'6'} onClick={() => { logOut() }} variant='ghost' >LogOut</Button>

  </Flex>;
}

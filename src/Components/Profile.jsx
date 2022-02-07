import { Box, Button, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import useAuth from '../Utilities/useAuth';
import Nav from './Nav';

export default function Profile() {
    const {user}=useAuth()
    console.log(user)
  return <VStack>
      <Nav/>
      <Box textAlign={'left'} p='3'>
      <Text fontSize={'lg'} textColor='gray.600'>Name:  {user.name}</Text>
      <Text fontSize={'lg'} textColor='gray.600'>Address:  {user.address}</Text>
      <Text fontSize={'lg'} textColor='gray.600'>Phone:  {user.phone}</Text>
      <Text fontSize={'lg'} textColor='gray.600'>Email:  {user.email}</Text>

      </Box>
      <Button width='-moz-min-content ' variant='outline'>Edit Profile</Button>
  </VStack>;
}

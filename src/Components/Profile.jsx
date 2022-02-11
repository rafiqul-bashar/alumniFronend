import { Button, Flex, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import useAuth from '../Utilities/useAuth';
import Nav from './Nav';

export default function Profile() {
  const { user } = useAuth()
  console.log(user)
  return <VStack>
    <Nav />
    <Flex shadow='md'  textAlign='left' flexDir='column' px={['2', '2', '64']}>


      <Text fontSize={'lg'} textColor='gray.600'>Name:  {user.name}</Text>
      <Text fontSize={'lg'} textColor='gray.600'>Address:  {user.address}</Text>
      <Text fontSize={'lg'} textColor='gray.600'>Phone:  {user.phone}</Text>
      <Text fontSize={'lg'} textColor='gray.600'>Email:  {user.email}</Text>

      <Button my='3' width='-moz-min-content ' variant='outline'>Edit Profile</Button>
    </Flex>;
  </VStack>;
}

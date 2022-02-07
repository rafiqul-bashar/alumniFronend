import { Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Nav from '../Components/Nav';
import Posts from '../Components/Posts';
import useAuth from '../Utilities/useAuth';
export default function Home() {
  const {user}=useAuth()
  return <VStack>
    <Nav/>
    <Text>Hi {user.name}</Text>
    <Posts/>
  </VStack>;
}

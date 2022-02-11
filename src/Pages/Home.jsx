import { Flex, VStack } from '@chakra-ui/react';
import React from 'react';
import Nav from '../Components/Nav';
import Posts from '../Components/Posts';
import WritePost from '../Components/WritePost';
import useAuth from '../Utilities/useAuth';
export default function Home() {
  const { user } = useAuth()
  return <VStack>
    <Nav />
    <Flex flexDir='column' px={['2', '2', '64']}>
      <WritePost />
      <Posts />
    </Flex>;
  </VStack>
}

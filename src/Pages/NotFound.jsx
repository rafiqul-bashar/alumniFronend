import { Center, Link, Text } from "@chakra-ui/react";
import React from 'react';
export default function NotFound() {
  return <Center>
      <Text fontSize={"3xl"} >Page Not Found | 404 </Text>
      <Link href='/' color='teal.500' fontSize='lg'>Back to home</Link>
  </Center>;
}

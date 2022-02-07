import { Box, Button, Center, Flex, Input, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../Utilities/useAuth';


export default function Login() {
  const { register, handleSubmit } = useForm()
  const {getUser,user}=useAuth()
  const onSubmit = async data => {
    const {email}=data 
    console.log(email,user)
    getUser(email)
  }
  return <Center>
    <Box px={['2', '6', '16', '32']} mx='auto' my='32'>
      <Text color={"teal.500"} fontSize='2xl' my='3'> Sign In to Continue</Text>
      <Flex width={['-webkit-fit-content']} flexDir='column'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register("email", { required: true })} variant={"filled"} placeholder='Enter Your email or phone' size='md' />
          <Input my='6' type={'password'} {...register("password", { required: true })} variant={"filled"} placeholder='Enter Password' size='md' />
          <Button type='submit' colorScheme={'teal'} width={'full'}>Login</Button>
        </form>
        <hr />
        <Text my='3' fontSize={"xl"}>
          Are you new here ? {' '}
          <Link color='pink.500' href='#'>
            Create an account
          </Link>
        </Text>
      </Flex>
    </Box>
  </Center>
}

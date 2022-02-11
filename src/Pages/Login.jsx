import { Box, Button, Center, Flex, Input, InputGroup, InputRightElement, Link, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../Utilities/useAuth';


export default function Login() {
  const { register, handleSubmit } = useForm()
  const { getUser, user,loadingState } = useAuth()
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const onSubmit = async data => {
    const { email } = data
    console.log(email, user)
    getUser(email)
  }
  return <Center>
    <Box px={['2', '6', '16', '32']} mx='auto' my={48} size='4xl'>
      <Text color={"teal.500"} fontSize='2xl' my={6}> Sign In to Continue</Text>
      <Flex width={['-webkit-fit-content']} flexDir='column'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register("email", { required: true })} variant={"filled"} placeholder='Enter Your email or phone' size='md' />
          <InputGroup my='6' size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
              {...register("password", { required: true })} variant="filled" size='md'
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button type='submit' colorScheme={'teal'} width={'full'}
            isLoading={loadingState}
            loadingText='Signing in'
            spinnerPlacement='start'>Sign in</Button>
        </form>
        <hr />
        <Text my='3' fontSize={"xl"}>
          Are you new here ? {' '}
          <Link color='pink.500' href='/register'>
            Create an account
          </Link>
        </Text>
      </Flex>
    </Box>
  </Center>
}

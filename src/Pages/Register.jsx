import { Box, Button, Center, Flex, Input, InputGroup, InputRightElement, Link, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Auth from '../Utilities/Auth';

export default function Register() {
  const { register, handleSubmit } = useForm()
  const { registerUser } = Auth()
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const onSubmit = async data => {
    console.log(data)
    registerUser(data)
  }

  return <Center>
    <Box px={['2', '6', '16', '32']} mx='auto' my='32' width='4xl'>
      <Text color={"purple.500"} fontSize='2xl' my='3'> Create Account</Text>
      <Flex width={['-webkit-fit-content']} flexDir='column'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register("name", { required: true })} placeholder='Enter Your Name' size='md' />
            <Input mt='3' {...register("email", { required: true })} placeholder='Enter Your Email' size='md' />
          <Input mt='3' {...register("address", { required: true })} placeholder='Enter Present Address' size='md' />
          <Input mt='3' {...register("phone", { required: true })} placeholder='Enter Your Phone' size='md' />
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
          <Button type='submit' colorScheme={'purple'} width={'full'}>Register</Button>
        </form>
        <hr />
        <Text my='3' fontSize={"xl"}>
          Already have an account ? {' '}
          <Link color='teal.500' href='/login'>
            Login Now
          </Link>
        </Text>
      </Flex>
    </Box>
  </Center>
}

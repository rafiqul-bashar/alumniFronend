import { Box, Button, Center, Flex, Input, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { useForm } from "react-hook-form";
import Auth from '../Utilities/Auth';

export default function Register() {
  const { register, handleSubmit } = useForm()
  const {registerUser}=Auth()
  const onSubmit = async data => {
    console.log(data)
    registerUser(data)
  }

  return <Center>
    <Box px={['2', '6', '16', '32']} mx='auto' my='32'>
      <Flex alignItems={'center'} justifyContent='center'>
        <Text color={"purple.500"} fontSize='2xl' my='3'> Create Account</Text>
      </Flex>

      <Flex width={['-webkit-fit-content']} flexDir='column'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register("name", { required: true })} placeholder='Enter Your Name' size='md' />
          <Input mt='3' {...register("email", { required: true })} placeholder='Enter Your Email' size='md' />
          <Input mt='3' {...register("address", { required: true })} placeholder='Enter Your Address' size='md' />
          <Input mt='3' {...register("phone", { required: true })} placeholder='Enter Your Phone' size='md' />
          <Input my='3' type={'password'} {...register("password", { required: true })} placeholder='Enter Password' size='md' />
          <Button type='submit'  colorScheme={'purple'} width={'full'}>Register</Button>
        </form>
        <hr />
        <Text my='3' fontSize={"xl"}>
          Already have an account ? {' '}
          <Link color='teal.500' href='#'>
            Login Now
          </Link>
        </Text>
      </Flex>
    </Box>
  </Center>
}

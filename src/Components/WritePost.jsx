import { Box, Button, Flex, Textarea } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../Utilities/useAuth';
import userApi from '../Utilities/userApi';
export default function WritePost() {
    const { register, handleSubmit, reset } = useForm()
    const {user}=useAuth()
    const onSubmit = async data => {
        const newPost = {
            userName:user.name,
            userEmail:user.email,
            post:data.body
        }
        console.log(newPost)
       try{
      var res = await userApi.post('/post/new',newPost)
        console.log(res.data)
    } catch (err){
        // window.location.reload()
        console.log(err.message)
    } finally {
        reset() 
    }
 
    }
    return <Box my='3'>
        <form  onSubmit={handleSubmit(onSubmit)}>
            <Textarea {...register("body", { required: true })}
                placeholder="What's on your mind ...."
                size='sm'
                resize='none'
            />
            <Flex justify='flex-start'> <Button type='submit' borderRadius='sm' colorScheme='teal' w='full' mt={3} >
                Post
            </Button></Flex>
        </form>
    </Box>;
}

import { Box, Button, Flex, Heading, Icon, Input, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import userApi from '../Utilities/userApi';

export default function Posts() {
    const [posts, setPosts] = useState([])
    const [like, setLike] = useState(false)
    const handleLike = () => setLike(!like)
    const fetchPosts = async () => {
        var res = await userApi.get('https://dummyjson.com/posts/')
        setPosts(res.data.posts)
    }

    fetchPosts()

    return <Flex>
        <SimpleGrid columns={1} width={['sm', 'md', 'lg']} spacing='40px' textAlign='left'>
            {posts.map(post => (
                <Box px={5} py={3} shadow='md' borderWidth='1px' >
                    <Heading fontSize='xl'>{post.title}</Heading>
                    <Text mt={4}>{post.body}</Text>
                    <Flex alignItems='center'>
                        <Button onClick={handleLike} colorScheme={like? 'teal' : null} size='sm' my='1'><Icon mr='2' as={AiOutlineLike} /> Like</Button>
                        <Input ml={2} size='sm' placeholder='Write Comment ..'></Input>
                    </Flex>
                </Box>
            ))
            }
        </SimpleGrid >
    </Flex>;
}

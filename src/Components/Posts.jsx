import { Box, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useState } from 'react';



export default function Posts() {
    const [posts, setPosts] = useState([])
    const fetchPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));

    }

    fetchPosts()

    return <Box>


        <SimpleGrid columns={[1, 1,3]} spacing='40px'>
            {posts.map(post => (
               <GridItem p='3' textAlign={'left'} key={post.id}>
                    <Text my='3' textColor='green.500'>{post.title}</Text>
                    <Text textColor={'gray.700'}>{post.body}</Text>
                </GridItem>
            ))}
        </SimpleGrid>
    </Box>;
}

import React from 'react'
import { Heading, VStack , Flex } from '@chakra-ui/react'

function Question({question}) {
  return (
    <VStack >
      <Flex
    fontSize={"20px"}
      my="3vh"
      fontFamily={" 'Montserrat', sans-serif"}
      fontWeight={"bold"}

      >
        <Heading  as='h4' size='md' mx={"10px"}
        
        fontFamily={" 'Montserrat', sans-serif"}
        >Quest: </Heading>
        <Heading  as='h4' size='md'
          fontFamily={" 'Montserrat', sans-serif"}
        
        dangerouslySetInnerHTML={{__html: question}}></Heading>
        </Flex>
    </VStack >
  )
}

export default Question
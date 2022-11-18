import React from "react";
import { Stack, HStack, VStack, Box, Button, background,  } from '@chakra-ui/react'


function Answer({ answer, onAnswer }) {



  const handleClick = ()=>{
    onAnswer(answer)
    
  }
  return (
    <Box 
    my={"10px"}
    fontFamily={" 'Montserrat', sans-serif"}
    >
     <HStack  height={"60px"} border={"2px solid  green"} width={"40%"} align={"center"} margin={"auto"}
     fontSize={"20px"}  bg='#C6F6D5' 
     borderRadius={"8px"}
     color="#1A365D"
     fontWeight={"bold"}
     >
      <span dangerouslySetInnerHTML={{ __html: answer }} style={{marginLeft:"10px"}}></span>
      <Button  onClick={handleClick}    
      ></Button>
      
    </HStack>
    </Box>
  );
}

export default Answer;

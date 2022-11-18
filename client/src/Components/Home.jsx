import React from "react";
import { useState } from "react";
import Quiz from "./Quiz";
import { VStack, Button, Heading, Stack  } from "@chakra-ui/react";

function Home() {
  const [finish, setFinsh] = useState(false);
  const [result, setResult] = useState(0);
  if (finish) {
    return (
      <div>
        <VStack >
            
          <Heading 
          fontFamily={"'Montserrat', sans-serif"}
          >No. Of Correct Answer: {result}</Heading >
          <Button colorScheme='orange' variant='outline' onClick={() => setFinsh(false)}> Play Again</Button>
         
        </VStack>
      </div>
    );
  }
  return (
    <Stack>
     <Heading
     fontFamily={" 'Montserrat', sans-serif"}
     my={"10px"}
     
     >Welcome Upraised Quiz Game</Heading>

        <Stack>

      <Quiz
        onResult={(result) => setResult(result)}
        onFinish={(finish) => setFinsh(finish)}
        />
        </Stack>
    </Stack>
  );
}

export default Home;

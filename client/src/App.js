
import { Box } from '@chakra-ui/react';
import './App.css';


import Home from './Components/Home';

function App() {
  return (
    <div className="App" >
          
          <Box
           backgroundImage="url('https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cXVlc3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60')"
           backgroundPosition="center"
           backgroundRepeat="no-repeat"
           height={"640px"}
          
          
          >

        <Home/>
          </Box>
          
   
    </div>
  );
}

export default App;

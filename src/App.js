// import logo from './logo.svg';
// import './App.css';
import { Box, Grommet, Image, Anchor, Paragraph } from 'grommet';
import { CaretDown, Directions } from 'grommet-icons';
import React from 'react';

const theme = {
  global: {
    font: {family: 'Inconsolata',
           size: '18px',
           height: '20px'
      }
  }
};



const FooterSection = () => (
  <>
  <Box direction="column">
  <Box
    tag='footer'
    direction='row'
    justify='center'
    pad='small'
    gap='small'

    //flex={true}
    background='black'>

<   Anchor 
            href="https://github.com/streamerd"
            target="_blank"
            color="white">code</Anchor> | 
    <Anchor 
            href="https://behance.net/atyilmaz"
            target="_blank"
            color="white">visual</Anchor> | 
            
    <Anchor href="https://ampled.com/artist/streamerd"
            target="_blank"
            color="white"
            >music</Anchor> |
    <Anchor href="https://ampled.com/artist/streamerd"
            target="_blank"
            color="white">blog</Anchor>     
  </Box>

  <Box
    tag='footer'
    direction='row'
    justify='center'
    pad='small'
    gap='small'

    //flex={true}
    background='black'>
    <Anchor href="https://twitter.com/_streamerd"
            target="_blank"
            color="white">twitter</Anchor> | 

    <Anchor href="https://instagram.com/streamerd_"
            target="_blank"
            color="white">instagram</Anchor>
 
    

     
  </Box>


  <Box align="center" justify="center">
  <Directions color="red"/>
  © all rights left
  </Box>
  </Box>
  </>
  
  );
  

function App() {
  return (
    <Grommet theme={theme}>
       
     <Box align="center" background="black" fill>
     <Box direction="column" align="center" background="black" fill>

      <Image src="./at_at_street.png" 
              width="262" 
              height="234px"
              margin="50px">
      </Image>

      <Paragraph align="center">
      abbas tolgay yılmaz
      <br></br>

      </Paragraph>

      <Paragraph align="center">
      software developer, artist
      </Paragraph>


      <Box>.</Box>
      <Box>.</Box>
      <Box>.</Box>
      <Box>.</Box>
        
      <Paragraph>
       <Anchor 
            href="#"
            // target="_blank"
            color="white">
          building a decentralized future,
          </Anchor>
      </Paragraph>  

      <Paragraph color="white">with {" "}
      <Anchor href="#"
              target="_blank"
              color="red"> 
               stateful.art 
      </Anchor>
        </Paragraph> 
        <Paragraph>
        ~ soon ~
        </Paragraph>

     </Box>
        <Box>.</Box>
        <Box>.</Box>
        <Box>.</Box>
        <Box>.</Box>
        <Paragraph>
           the revolution will be minted.
        </Paragraph>
        <Box>.</Box>
        <Box>.</Box>
        <Box>.</Box>
        <Box> <CaretDown color="yellow"/></Box>

        <FooterSection/>
     </Box>


     
    </Grommet>
  );
}

export default App;

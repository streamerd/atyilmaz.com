// import logo from './logo.svg';
// import './App.css';
import { Box, Grommet, Image, Anchor, Paragraph } from 'grommet';

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
  <Box
    tag='footer'
    direction='row'
    justify='center'
    pad='small'
    gap='small'

    // flex={true}
    background='black'>

<   Anchor 
            href="https://github.com/streamerd"
            target="_blank"
            color="white">code</Anchor> | 
    <Anchor 
            href="https://behance.net/atyilmaz"
            target="_blank"
            color="white">visual arts</Anchor> | 
            
    <Anchor href="https://ampled.com/artist/streamerd"
            target="_blank"
            color="white">music</Anchor> | 

    <Anchor href="https://twitter.com/_streamerd"
            target="_blank"
            color="white">twitter</Anchor> | 

    <Anchor href="https://instagram.com/streamerd_"
            target="_blank"
            color="white">instagram</Anchor>
    

     
  </Box>
  </>
  
  );
  

function App() {
  return (
    <Grommet theme={theme} full>
       
     <Box justify="top" align="center" background="black" fill>
     <Box direction="column" align="center" background="black" fill>

      <Image src="./at_at_street.png" 
              width="262" 
              height="234px"
              margin="50px">
      </Image>

      <Paragraph justify="center">
      abbas tolgay yılmaz
      </Paragraph>

      <Paragraph>
      design-thinker, software developer, artist
      </Paragraph>

      <Paragraph>
        -------------
      </Paragraph>

      <Paragraph>
        "the revolution will be minted"
      </Paragraph>

      <Paragraph>
        -------------
      </Paragraph>
      <Paragraph>
      building a <Anchor 
            href="#"
            target="_blank"
            color="red">
          decentralized future
          </Anchor> <br></br>
      </Paragraph>    
     </Box>
        
     <FooterSection/>
     </Box>


     
    </Grommet>
  );
}

export default App;

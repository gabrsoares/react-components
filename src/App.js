import Form from './components/Form/Form';
import Header from './components/Header/index';
import IMC from './components/IMC';
import Login from './components/Login/LoginControl'
import { Heading1, Loader } from './components/Styles/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import React from 'react';

import { Box, Container, ThemeProvider } from '@mui/system'
import { themeOne, themeTwo} from './theme'
import { Scale, ScaleOutlined } from '@mui/icons-material';

function App() {
  return (
    <React.Fragment>
      <Container sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        marginTop: '2rem'
      }} maxWidth='sm'>

        <ThemeProvider theme={themeOne}>

          <Box sx={{
          bgcolor: 'background.base',
          boxShadow: 1,
          borderRadius: 3,
          p: 2,
          minWidth: 250,
          color: 'text.primary'
        }}>
          <Box sx={{
            fontSize: 36
          }}>Seções</Box>
          <Box sx={{
            fontSize: 26,
            color: 'text.secondary',
            fontWeight: 700
          }}>100k</Box>
          <Box>+10%</Box>
          <Box>vs. last week</Box>
        </Box>

        </ThemeProvider>
        
        <ThemeProvider theme={themeTwo}>

          <Box sx={{
          bgcolor: 'background.base',
          boxShadow: 1,
          borderRadius: 3,
          color:'text.primary',
          minWidth: 250,
          p: 2,
        }}>
          <Box sx={{
            fontSize: 36
          }}>Viualizações</Box>
          <Box sx={{
            fontSize: 26,
            color: 'text.secondary',
            fontWeight: 700,
          }}>30k</Box>
          <Box>+15%</Box>
          <Box>vs. last week</Box>
        </Box>

        </ThemeProvider>
        
  
      </Container>
      
      {/* <Header title="Testando" />
      <IMC /> */}
      {/* <Form title = "props"/>

      <Heading1>
        Styled component
        <span>Subtitle</span>
      </Heading1>

      <Loader />

      <Login name={'Gabriel'} />

      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
    </Stack> */}

    </React.Fragment>
  );
}

export default App;

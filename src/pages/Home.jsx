import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TriviaForm from '../Components/TriviaForm';
import '../styles/App.scss';
import Navigation from '../Components/Navigation';
import MobileNavigation from '../Components/MobileNavigation';

const Home = (_) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Box id="wrapper">
        <Paper
          elevation={5}
          sx={{
            p: 4,
          }}
        >
          <TriviaForm loading={loading} />
        </Paper>
      </Box>
      <Navigation />
      <MobileNavigation />
    </>
  );
};

export default Home;

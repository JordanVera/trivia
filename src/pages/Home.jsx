import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TriviaForm from '../Components/TriviaForm';
import '../styles/App.scss';

function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <Box sx={{ minWidth: '300px', maxWidth: '1000px' }}>
      <Paper
        elevation={5}
        sx={{
          p: 4,
        }}
      >
        <TriviaForm loading={loading} />
      </Paper>
    </Box>
  );
}

export default Home;

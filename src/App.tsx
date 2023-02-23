import React from 'react';
import logo from './logo.svg';
import ExpensesSection from './sections/ExpensesSection';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ padding: '2rem' }}>
      <ExpensesSection />
    </Box>
  );
}

export default App;

import { Box, Stack, Typography } from '@mui/material';

const DateCard = () => {
  return (
    <Box
      sx={{
        display: 'inline-block',
        padding: '1rem',
        border: '1px solid lightgray',
        borderRadius: '5px',
        backgroundColor: 'black',
      }}>
      <Stack>
        <Typography>Months</Typography>
        <Typography>Year</Typography>
        <Typography>Days</Typography>
      </Stack>
    </Box>
  );
};

export default DateCard;

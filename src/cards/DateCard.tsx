import { Box, Stack, Typography } from '@mui/material';

interface Props {
  date: Date;
}
const DateCard = (props: Props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
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
        <Typography>{month}</Typography>
        <Typography>{year}</Typography>
        <Typography>{day}</Typography>
      </Stack>
    </Box>
  );
};

export default DateCard;

import {
  Box,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import DateCard from './DateCard';
import { CardType } from '../sections/ExpensesSection';

const theme = createTheme({
  components: {
    // Name of the component
    MuiTypography: {
      styleOverrides: {
        // Name of the slot
        root: {
          color: 'white',
        },
      },
    },
  },
});

interface Props {
  cardInfo: CardType;
}

const ExpenseCard = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Box
          sx={{
            //   display: 'inline-block',
            backgroundColor: '#4D455D',
            borderRadius: '5px',
            padding: '1rem',
            m: '10px',
          }}>
          <Stack
            direction={'row'}
            display={'flex'}
            justifyContent={'space-between'}>
            <Stack
              direction={'row'}
              spacing={1}>
              <DateCard date={props.cardInfo.date} />
              <Typography>{props.cardInfo.title}</Typography>
            </Stack>
            <Typography>{props.cardInfo.amount}</Typography>
          </Stack>
        </Box>
      </>
    </ThemeProvider>
  );
};

export default ExpenseCard;

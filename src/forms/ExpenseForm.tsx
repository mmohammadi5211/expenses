import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from '@mui/material';
import { useState } from 'react';

interface Props {
  addCard: (params: { title: string; amount: string; date: Date }) => void;
}
const ExpensesForm = (props: Props) => {
  const [titleExpense, setTitleExpense] = useState('');
  const [amountExpense, setAmoutnExpense] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const formHandler = (e: any) => {
    // e.preventDefault();
    const value = {
      title: titleExpense,
      amount: amountExpense,
      date: new Date(enteredDate),
    };
    props.addCard(value);
    setTitleExpense('');
    setAmoutnExpense('');
    setEnteredDate('');
  };
  return (
    <>
      <Box
        sx={{
          padding: '1rem',
          border: '1px solid lightgray',
          borderRadius: '10px',
          width: '30%',
        }}>
        <FormControl>
          <Stack
            direction={'row'}
            spacing={1}>
            <TextField
              label='title'
              value={titleExpense}
              onChange={(e) => setTitleExpense(e.target.value)}
            />
            <TextField
              label='amount'
              value={amountExpense}
              onChange={(e) => setAmoutnExpense(e.target.value)}
            />
            <input
              type='date'
              onChange={(e) => setEnteredDate(e.target.value)}
            />
          </Stack>
          <Stack
            sx={{ mt: '10px', justifyContent: 'center', alignItems: 'center' }}>
            <Button
              variant='contained'
              onClick={formHandler}>
              Add
            </Button>
          </Stack>
        </FormControl>
      </Box>
    </>
  );
};

export default ExpensesForm;

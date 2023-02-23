import { Box } from '@mui/material';
import ExpensesForm from '../forms/ExpenseForm';
import ExpensesList from '../lists/ExpensesList';
import { useState } from 'react';
import { type } from 'os';

interface Props {}
type Values = { title: string; amount: string; date: Date };
export type CardType = {
  id: number;
  title: string;
  amount: string;
  date: Date;
};

let nextId = 3;
const ExpensesSection = (props: Props) => {
  const [cards, setCards] = useState<CardType[]>([]);
  const addCard = (values: Values) => {
    setCards([
      ...cards,
      {
        id: nextId++,
        title: values.title,
        amount: values.amount,
        date: values.date,
      },
    ]);
  };
  return (
    <>
      <ExpensesForm addCard={addCard} />
      <ExpensesList cards={cards} />
    </>
  );
};

// const initial = [
//   {
//     id: 1,
//     title: 'ali',
//     amount: '2',
//   },
// ];

export default ExpensesSection;

import { Box } from '@mui/material';
import ExpenseCard from '../cards/ExpenseCard';
import { CardType } from '../sections/ExpensesSection';

interface Props {
  cards: CardType[];
}
const ExpensesList = (props: Props) => {
  const cardInfo = props.cards;
  return (
    <>
      <Box
        sx={{
          mt: '1rem',
          border: '1px solid lightgray',
          padding: '1rem',
          width: '50%',
          backgroundColor: 'black',
        }}>
        <ul style={{ margin: '3px' }}>
          {props.cards.map((cardInfo) => (
            <li key={cardInfo.id}>
              <ExpenseCard cardInfo={cardInfo} />
            </li>
          ))}
        </ul>
      </Box>
    </>
  );
};

export default ExpensesList;

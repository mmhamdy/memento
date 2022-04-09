import { CardType } from '../../utils/loadCards';
import { Card } from '../Card/Card';
import { Grid } from './CardGrid.styles';

type Props = {
  cards: CardType[],
  firstChoice: CardType | null,
  secondChoice: CardType | null,
  interaction: boolean,
  handleChoice: (card: CardType) => void
}

export const CardGrid = ({cards, firstChoice, secondChoice, interaction, handleChoice}: Props) => {
  
  return (
    <Grid>
      {cards.map(card => (
        <Card 
          card={card}
          flipped={card === firstChoice || card === secondChoice || card.matched}
          interaction={interaction}
          handleChoice={handleChoice}
          key={card.id}
        />
      ))}
    </Grid>
  )
}


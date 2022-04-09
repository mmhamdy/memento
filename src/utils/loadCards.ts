import card1 from '../assets/images/bird1.png';
import card2 from '../assets/images/bird2.png';
import card3 from '../assets/images/bird3.png';
import card4 from '../assets/images/bird4.png';
import card5 from '../assets/images/bird5.png';
import card6 from '../assets/images/bird6.png';
import cover from '../assets/images/cover.png';

export type CardType = {
  id: string,
  frontImage: string,
  backImage: string,
  matchingCardId: string,
  matched: boolean
};

const cards: string[] = [card1, card2, card3, card4, card5, card6];

export const loadCards = (): CardType[] => {
  return (
    [...cards, ...cards].map((card, i) => ({
      id: `card${i}`,
      frontImage: card,
      backImage: cover,
      matchingCardId: i < cards.length ? `card${i + cards.length}` : `card${i - cards.length}`,
      matched: false,
    }))
  )
};
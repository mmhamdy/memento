import { CardType } from "../../utils/loadCards";
import { Wrapper, FrontImg, BackImg } from "./Card.styles";

type Props = {
  card: CardType,
  flipped: boolean,
  interaction: boolean,
  handleChoice: (card: CardType) => void
};

export const Card = ({card, flipped, interaction, handleChoice}: Props) => {

  const handleClick = () => {
    if (interaction) handleChoice(card)
  }

  return (
    <Wrapper>
      <FrontImg 
        flipped={flipped} 
        src={card.frontImage} 
        alt='card-face' 
        width={200}
        height={200}
      />
      <BackImg 
        flipped={flipped} 
        src={card.backImage} 
        alt='card-cover'
        onClick={handleClick} 
        width={200}
        height={200}
      />
    </Wrapper>
  )
}

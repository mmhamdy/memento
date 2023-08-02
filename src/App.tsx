import { useState, useEffect } from 'react';
import { CardGrid } from './components/CardGrid/CardGrid';
import { Global } from '@emotion/react';
import { globalStyles, Wrapper, Logo, Button } from './App.styles';
import { shuffleArray } from './utils/shuffleArray';
import { CardType, loadCards } from './utils/loadCards';
import logo from './assets/images/logo.png';


function App() {
  const [cards, setCards] = useState<CardType[]>(shuffleArray(loadCards()));
  const [turns, setTurns] = useState(0);
  const [firstChoice, setFirstChoice] = useState<CardType | null>(null);
  const [secondChoice, setSecondChoice] = useState<CardType | null>(null);
  const [interaction, setInteraction] = useState(true);
  const [matchedPairs, setMatchedPairs] = useState(0);
  
  useEffect(() => {
    console.log(firstChoice)
    console.log(secondChoice)
  }, [firstChoice, secondChoice])

  const handleChoice = (card: CardType): void => {
    console.log(card)
    firstChoice ? setSecondChoice(card) : setFirstChoice(card)
  }

  const resetTurn = (): void => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns(prevTurns => prevTurns + 1);
    setInteraction(true);
  }

  const restartGame = (): void => {
    setFirstChoice(null);
    setSecondChoice(null);
    setCards(shuffleArray(loadCards()))
    setTurns(0);
  }

  useEffect(() => {
    if (firstChoice && secondChoice) {
      setInteraction(false)

      if (firstChoice.id === secondChoice.matchingCardId) {
        setCards(prevCards => prevCards.map(card => {
          if (card.id === firstChoice.id || card.id === secondChoice.id) {
            return {...card, matched: true};
          } else {
            return card;
          }
        }))
        setMatchedPairs(prev => prev + 1);
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000)
      } 
    }
  }, [firstChoice, secondChoice])

  return (
    <Wrapper>
      <Global styles={globalStyles} />
      <Wrapper>
        <Logo src={logo}/>
      </Wrapper>
      <Button onClick={restartGame}>Restart Game</Button>
      <CardGrid 
        cards={cards} 
        firstChoice={firstChoice}
        secondChoice={secondChoice}
        interaction={interaction} 
        handleChoice={handleChoice}
      />
      <p>Turns: {turns}</p>
    </Wrapper>
  )
}

export default App;

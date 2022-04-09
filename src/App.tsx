import { useState, useEffect } from 'react';
import { CardGrid } from './components/CardGrid/CardGrid';
import { Global } from '@emotion/react';
import { globalStyles, Wrapper } from './App.styles';
import { shuffleArray } from './utils/shuffleArray';
import { CardType, loadCards } from './utils/loadCards';


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
      <h1>Bird Matcher</h1>
      <button>Start Game</button>
      <CardGrid 
        cards={cards} 
        firstChoice={firstChoice}
        secondChoice={secondChoice}
        interaction={interaction} 
        handleChoice={handleChoice}
      />
    </Wrapper>
  )
}

export default App;

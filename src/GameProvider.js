import { useState,
  createContext,
  useContext } from 'react';
import initialCards from './cards-data';

const GameContext = createContext();

export default function GameProvider({ children }) {
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  const gameState = {
    deck, setDeck,
    playerOneHand, setPlayerOneHand,
    playerTwoHand, setPlayerTwoHand,
    playerThreeHand, setPlayerThreeHand,
    selectedCard, setSelectedCard,
    from, setFrom,
    to, setTo,
  };


  return <GameContext.Provider value={gameState}>
    {children}
  </GameContext.Provider>;
}

export function useGameContext() {
  return useContext(GameContext);
}
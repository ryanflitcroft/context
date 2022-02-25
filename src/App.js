import './App.css';
// import initialCards from './cards-data';
import Player from './Player';
import CardList from './CardList';
// import { useState } from 'react';
import ExecutePassButton from './ExecutePassButton';

import { useGameContext } from './GameProvider';

function App() {
  // const [deck, setDeck] = useState(initialCards);
  // const [playerOneHand, setPlayerOneHand] = useState([]);
  // const [selectedCard, setSelectedCard] = useState();
  // const [playerTwoHand, setPlayerTwoHand] = useState([]);
  // const [playerThreeHand, setPlayerThreeHand] = useState([]);
  // const [from, setFrom] = useState('deck');
  // const [to, setTo] = useState(1);
  const {
    deck,
    playerOneHand,
    selectedCard,
    playerTwoHand,
    playerThreeHand,
    from,
    to,
    passCard,
  } = useGameContext();

  // function findCardIndex(value, suit, cards) {
  //   return cards.findIndex(card => card.value === value && card.suit === suit);
  // }

  // function passCard(card) {
  //   const playerHands = [playerOneHand, playerTwoHand, playerThreeHand];
  //   const playerHandSetFunctions = [setPlayerOneHand, setPlayerTwoHand, setPlayerThreeHand];

  //   // arrays start at zero, but our players start at 1 :shrug:
  //   const toHand = playerHands[to - 1] || deck;
  //   const fromHand = playerHands[from - 1] || deck;

  //   const toSetFunction = playerHandSetFunctions[to - 1] || setDeck;
  //   const fromSetFunction = playerHandSetFunctions[from - 1] || setDeck;

  //   const cardToMoveIndex = findCardIndex(card.value, card.suit, fromHand);
  //   const [cardToMove] = fromHand.splice(cardToMoveIndex, 1);

  //   toHand.push(cardToMove);

  //   toSetFunction([...toHand]);
  //   fromSetFunction([...fromHand]);

  //   setSelectedCard(null);
  // }

  return (
    <div className="App">
      <section>
        {/* if the player names are numbers, that will make our life easier later because we can reuse numbers as arrays. Note that this will make our app brittle! */}
        <Player player={1} hand={playerOneHand} />
        <Player player={2} hand={playerTwoHand} />
        <Player player={3} hand={playerThreeHand} />
        <CardList cards={deck} player={'deck'} />
      </section>
      <section>
        {
          selectedCard && <ExecutePassButton passCard={passCard} from={from} to={to} selectedCard={selectedCard} />
        }
      </section>
    </div>
  );
}

export default App;

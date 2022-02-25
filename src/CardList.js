import React from 'react';
import Card from './Card';

import { useGameContext } from './GameProvider';

export default function CardList({ player, cards }) {

  const {
    selectedCard,
    setSelectedCard,
    setFrom
  } = useGameContext();
  
  return (
    <div className='card-list'>
      {
        cards.map((card => <Card 
          key={card.suit + card.value} 
          selectedCard={selectedCard}
          card={card}
        />))
      }
    </div>
  );
}

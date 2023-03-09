import { useEffect, useMemo, useState } from 'react';
import api from 'services/api';
import { CardModal } from 'components';
import { groupBy } from 'utils';

import Collumn from "./Collumn";
import './styles.scss';


function Board() {

  const[cards, setCards] = useState([]);
  const[showCardModal, setShowCardModal] = useState(undefined);
  
  useEffect(() => {
    async function getCards () {
      try {
        const response = await api.get('cards');
        setCards(response.data);
      } catch (error) {
        console.error(error)
      }
    }
    getCards();
  }, []);

  console.log("CARDS LIST >>>", cards);

  const handleNewCard = () => {
    console.log("New Card");
    setShowCardModal({});
  }

  const handleCardEdit = (card) => {
    console.log("EDIÇÃO CARD >>>", card);
    setShowCardModal({})
  }

  const handleSave = (savedCard) => {
    setCards(prevState => [...prevState, savedCard]);
  }

  const cardsList = useMemo(() => (
    groupBy(cards, 'lista')
  ), [cards]);

  console.log(cardsList);

  return(
    <main className="board">
      <Collumn 
        title="To Do" 
        actionButtonTitle={"Novo card"}
        actionButton={handleNewCard}
        onCardEdit={handleCardEdit}
        cards={cardsList?.ToDo}
      />
      <Collumn 
        title="Doing" 
        onCardEdit={handleCardEdit}
        cards={cardsList?.Doing}
      />
      <Collumn 
        title="Done" 
        onCardEdit={handleCardEdit}
        cards={cardsList?.Done}
      />

      <CardModal 
        cardData={showCardModal}
        onClose={() => setShowCardModal(undefined)} 
        onSave={handleSave}
      />
    </main>
  )
}


export default Board;
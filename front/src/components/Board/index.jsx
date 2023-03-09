import { useCallback, useEffect, useMemo, useState } from 'react';
import api from 'services/api';
import { CardModal } from 'components';
import { groupBy, COLLUMNS_NAME } from 'utils';

import Collumn from "./Collumn";
import './styles.scss';

function Board() {

  const[cards, setCards] = useState([]);
  const[showCardModal, setShowCardModal] = useState(undefined);
  

  const getCards = useCallback(async () => {
    try {
      const response = await api.get('cards');
      setCards(response.data);
    } catch (error) {
      console.error(error)
    }
  }, []);

  useEffect(() => {
    getCards();
  }, [getCards]);

  const handleNewCard = () => {
    setShowCardModal({});
  }

  const handleEdit = (card) => {
    setShowCardModal(card);
  }

  const handleSave = (savedCard) => {
    setCards(prevState => [...prevState, savedCard]);
  }

  const handleDelete = (deletedCardId) => {
    setCards(prevState => prevState.filter(item => item.id !== deletedCardId))
  }

  const handleUpdate = () => {
    getCards();
  }

  const cardsList = useMemo(() => (
    groupBy(cards, 'lista')
  ), [cards]);

  return(
    <main className="board">
      {
        COLLUMNS_NAME.map((collumn, index) => {
          let actionProps = {};
          if (index === 0) {
            actionProps.actionButtonTitle = "Novo card";
            actionProps.actionButton= handleNewCard
          }
          return(
            <Collumn
              key={collumn}
              title={collumn}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
              cards={cardsList[collumn]}
              {...actionProps}
            />
          )
        })
      }

      <CardModal 
        cardData={showCardModal}
        onClose={() => setShowCardModal(undefined)} 
        onSave={handleSave}
        onUpdate={handleUpdate}
      />
    </main>
  )
}


export default Board;
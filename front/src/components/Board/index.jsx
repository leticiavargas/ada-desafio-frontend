import { useState } from 'react';
import { CardModal } from 'components';

import Collumn from "./Collumn";
import './styles.scss';

function Board() {

  const[showModal, setShowModal] = useState(false);

  const handleNewCard = () => {
    console.log("New Card");
    setShowModal(!showModal);
  }

  const handleCardEdit = (id) => {
    console.log("EDIÇÃO CARD >>>", id)
  }

  return(
    <main className="board">
      <Collumn 
        title="To Do" 
        actionButtonTitle={"Novo card"}
        actionButton={handleNewCard}
        onCardEdit={handleCardEdit}
      />
      <Collumn 
        title="Doing" 
        onCardEdit={handleCardEdit}
      />
      <Collumn 
        title="Done" 
        onCardEdit={handleCardEdit}
      />

      <CardModal 
        visible={showModal} 
        title="Novo card" 
        onClose={() => setShowModal(!showModal)} 
      />
    </main>
  )
}



export default Board;
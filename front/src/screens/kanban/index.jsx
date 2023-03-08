import { Header, Board, CardModal } from 'components';
import { useState } from 'react';
import './styles.scss';

function Kanban() {
  const[showModal, setShowModal] = useState(false);

  const handleNewCard = () => {
    console.log("New Card");
    setShowModal(!showModal);
  }

  return(
    <div className='kanban'>
      <Header />
      <Board handleNewCard={handleNewCard} />

      <CardModal visible={showModal} title="Novo card" onClose={() => setShowModal(!showModal)}>
        
      </CardModal>
    </div>
  )
}

export default Kanban;
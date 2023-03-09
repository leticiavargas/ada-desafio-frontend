import { useState } from 'react';
import api from 'services/api';
import { Modal, Button } from 'components';
import { FaSave, FaBan } from 'react-icons/fa';
import './styles.scss';

function CardModal({ cardData, onClose, onSave, ...otherProps }) {

  const[title, setTitle] = useState('');
  const[content, setContent] = useState('');

  const visible = Boolean(cardData);
  let modalTitle = "";

  if (visible)
    modalTitle = Object.entries(cardData).length > 0 ? "Edição do Card" : "Novo Card";

  const handleClose = () => {
    setContent('');
    setTitle('');
    onClose();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const cardJson = Object.fromEntries(formData.entries());

    cardJson.lista = 'ToDo';
    try {
      const response = await api.post('cards', cardJson);
      if (response.status == 201) {
        handleClose();
        onSave(response.data);
      }
    } catch (error) {
      console.error(error);
    }
    
  }

  return(
    <Modal onClose={onClose} visible={visible} title={modalTitle} {...otherProps}>
      <form className='card-modal' onSubmit={handleSubmit}>
        <label htmlFor='titulo'>Titulo</label>
        <input name="titulo" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Descrição</label>
        <textarea 
          name='conteudo'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
       
        <footer>
          <Button type='button' onClick={handleClose}> <FaBan /> </Button>
          <Button title='Salvar'> <FaSave /> </Button>
        </footer>
      </form>
    </Modal>
  )
}

export default CardModal;


import { Modal, Button } from 'components';
import { useState } from 'react';
import { FaSave, FaBan } from 'react-icons/fa';
import './styles.scss';

function CardModal({ cardId, onClose, ...otherProps }) {

  const[title, setTitle] = useState('');
  const[content, setContent] = useState('');

  const handleClose = () => {
    setContent('');
    setTitle('');
    onClose();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return(
    <Modal onClose={onClose} {...otherProps}>
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


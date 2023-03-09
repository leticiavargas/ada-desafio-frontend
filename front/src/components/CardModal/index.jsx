import { useEffect, useState } from 'react';
import api from 'services/api';
import { Modal, Button } from 'components';
import { FaSave, FaBan } from 'react-icons/fa';
import './styles.scss';

function CardModal({ cardData, onClose, onSave, onUpdate, ...otherProps }) {
  const[title, setTitle] = useState('');
  const[content, setContent] = useState('');
  const [errors, setErrors] = useState({});

  const visible = Boolean(cardData);
  const isEdition = visible && Object.entries(cardData).length > 0;
  const modalTitle = isEdition ?  "Edição do Card" : "Novo Card";

  useEffect(() => {
    if (!isEdition) return;

    setTitle(cardData?.titulo);
    setContent(cardData?.conteudo);
  }, [cardData, isEdition]);

  const handleClose = () => {
    setContent('');
    setTitle('');
    setErrors({});
    onClose();
  }

  const validateForm = (data) => {
    const errors = {};
    if (data.titulo === '' )
      errors.titulo = "Informe um título";
    if (data.conteudo === '' )
      errors.conteudo = "Conteúdo não pode ficar em branco";

    errors.count = Object.keys(errors).length;
    return errors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const cardJson = Object.fromEntries(formData.entries());
    
    const errors = validateForm(cardJson);
    if (errors.count) {
      setErrors(errors);
      return;
    }
   
    
    if (isEdition) {
      cardJson.id = cardData.id;
      cardJson.lista = cardData.lista;
      try {
        const response = await api.put('cards/' + cardData.id, cardJson);
        if (response.status === 200) {
          handleClose();
          onUpdate();
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      cardJson.lista = 'ToDo';
      try {
        const response = await api.post('cards', cardJson);
        if (response.status === 201) {
          handleClose();
          onSave(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    
  }

  return(
    <Modal onClose={handleClose} visible={visible} title={modalTitle} {...otherProps}>
      <form className='card-modal' onSubmit={handleSubmit}>
        <label 
          htmlFor='titulo'
          className={errors.titulo ? 'error' : ''}
        >
          Titulo <span className='required'>(obrigatório)</span>
        </label>
        <input 
          name="titulo"
          className={errors.titulo ? 'error' : ''}
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
          />
        {errors.titulo  && <span className='legend'>{errors.titulo}</span>}

        <label className={errors.conteudo ? 'error' : ''}>
          Descrição <span className='required'>(obrigatório)</span>
        </label>
        <textarea 
          name='conteudo'
          className={errors.conteudo ? 'error' : ''}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {errors.conteudo  && <span className='legend'>{errors.conteudo}</span>}
        <footer>
          <Button type='button' onClick={handleClose}> <FaBan /> </Button>
          <Button title='Salvar'> <FaSave /> </Button>
        </footer>
      </form>
    </Modal>
  )
}

export default CardModal;


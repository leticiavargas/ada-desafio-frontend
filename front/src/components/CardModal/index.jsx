import { Modal, Button } from 'components';
import { FaSave, FaBan } from 'react-icons/fa';
import './styles.scss';

function CardModal({ ...otherProps }) {
  return(
    <Modal {...otherProps}>
      <div className='card-modal'>
        
          <label htmlFor=''>Titulo</label>
          <input />
          <label>Descrição</label>
          <textarea />
       
        <footer>
          <Button> <FaBan /> </Button>
          <Button> <FaSave /> </Button>
        </footer>
      </div>
    </Modal>
  )
}

export default CardModal;


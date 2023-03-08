import { Button } from 'components';
import { FaTimes } from 'react-icons/fa';
import './styles.scss';

function Modal ({ className, contentClassName = '', visible = false, onClose, title, children, ...otherProps }) {

  return(
    <div className={`modal ${className} ${visible ? 'visible' : ''}`} { ...otherProps } >
      <div className={`contentContainer ${contentClassName}`}>
        <header>
          {!!(title && title.length) && <h2>{title}</h2>}
          <Button onClick={onClose} title="Fechar modal"><FaTimes /></Button>
        </header>
        { children }
      </div>
    </div>
  )
}

export default Modal;
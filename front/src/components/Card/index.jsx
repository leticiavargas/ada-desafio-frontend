import { Button } from 'components';
import { FaEdit, FaPlusCircle, FaTrash, FaChevronCircleLeft, FaChevronCircleRight, FaSave } from "react-icons/fa";
import './styles.scss';

function Card() {
  return(
    <div className='card'>
      <header>
        <label>Titulo Card</label>
        <Button
          title="Clique aqui para editar o card"
        >
          <FaEdit />
        </Button>
      </header>
      <main>Conteudo</main>
      <footer>
        <Button> <FaChevronCircleLeft /> </Button>
        <Button> <FaTrash /> </Button>
        <Button> <FaChevronCircleRight /> </Button>
      </footer>
    </div>
  )
}

export default Card;
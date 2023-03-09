import { Button } from 'components';
import { FaEdit, FaTrash, FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import './styles.scss';

function Card({id, title, content='', list, onEdit }) {

  const renderedHTML = DOMPurify.sanitize(marked.parse(content));

  return(
    <div className='card'>
      <header>
        <label>{title}</label>
        <Button
          title="Clique aqui para editar o card"
          onClick={() => onEdit(id)}
        >
          <FaEdit />
        </Button>
      </header>
      <main>
        <div dangerouslySetInnerHTML={{__html: renderedHTML}} />
      </main>
      <footer>
        {list !== "ToDo" && <Button type="button"> <FaChevronCircleLeft /> </Button>}
        <Button type="button"> <FaTrash /> </Button>
        {list !== "Done" && <Button type="button"> <FaChevronCircleRight /> </Button>}
      </footer>
    </div>
  )
}

export default Card;
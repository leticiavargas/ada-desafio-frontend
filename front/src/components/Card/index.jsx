import api from 'services/api';
import { Button } from 'components';
import { FaEdit, FaTrash, FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import './styles.scss';

function Card({id, title, content='', list, onEdit }) {

  const renderedHTML = DOMPurify.sanitize(marked.parse(content));

  const handleDelete = async () => {
    console.log("deletando ...")

    try {
      const response = await api.delete('cards/' + id);
      console.log("deletou?", response);
    } catch (error) {
      console.error(error)
    }
  }

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
        <Button type="button" onClick={handleDelete}> <FaTrash /> </Button>
        {list !== "Done" && <Button type="button"> <FaChevronCircleRight /> </Button>}
      </footer>
    </div>
  )
}

export default Card;
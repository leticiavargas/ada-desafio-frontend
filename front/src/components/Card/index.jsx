import api from 'services/api';
import { Button } from 'components';
import { COLLUMNS_NAME } from 'utils';
import { FaEdit, FaTrash, FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import './styles.scss';

function Card({data, onEdit, onDelete, onUpdate }) {
  
  if (!data) return;

  const { id, titulo, conteudo, lista} = data;
  const renderedHTML = DOMPurify.sanitize(marked.parse(conteudo));

  const handleDelete = async () => {
    
    if(window.confirm("Você tem certeza que deseja excluir o card") == false)
      return;

    try {
      const response = await api.delete('cards/' + id);
      if (response.status === 200)
        onDelete(id);
    } catch (error) {
      console.error(error);
    }
  }

  const handleChangeList = async (direction) => {
    const listIndex = COLLUMNS_NAME.indexOf(lista);

    const newListIndex = direction === 'left' ? listIndex - 1 : listIndex + 1;
    const newList = COLLUMNS_NAME[newListIndex];
    
    const cardData = {...data, lista: newList};

    try {
      const response = await api.put('cards/' + cardData.id, cardData);
      if (response.status === 200)
        onUpdate();
    } catch (error) {
      console.error(error);
    }
  }

  return(
    <div className='card'>
      <header>
        <label>{titulo}</label>
        <Button
          title="Clique aqui para editar o card"
          onClick={() => onEdit(data)}
        >
          <FaEdit />
        </Button>
      </header>
      <main>
        <div dangerouslySetInnerHTML={{__html: renderedHTML}} />
      </main>
      <footer>
        {lista !== COLLUMNS_NAME[0] && <Button type="button" onClick={() => handleChangeList('left')}> <FaChevronCircleLeft /> </Button>}
        <Button type="button" onClick={handleDelete}> <FaTrash /> </Button>
        {lista !== COLLUMNS_NAME[2] && <Button type="button" onClick={() => handleChangeList('right')}> <FaChevronCircleRight /> </Button>}
      </footer>
    </div>
  )
}

export default Card;
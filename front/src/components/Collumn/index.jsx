import { Card, Button } from 'components';
import './styles.scss';

function Collumn({ title, actionButtonTitle, actionButton, onEdit, onDelete, onUpdate, cards }) {  

  return(
    <div className="collumn">
      <header>
        <h2>{title}</h2>
        { actionButtonTitle && 
          <Button 
            className="square" 
            onClick={actionButton}
            title="Adicionar novo card"
          >
            {actionButtonTitle}
          </Button>
        }
      </header>
      <div className='main'>
        {!cards && <div className='empty-state'>Sem cards nesta lista</div>}

        {cards?.map((card) => (
          <Card 
            key={card.id}
            data={card}
            onEdit={onEdit}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}

      </div>
    </div>
  )
}

export default Collumn;


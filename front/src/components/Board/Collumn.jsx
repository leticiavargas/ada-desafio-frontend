
import { Card, Button } from 'components';

function Collumn({ title, actionButtonTitle, actionButton, onCardEdit, cards }) {  

  return(
    <div className="collumn">
      <header>
        <h2>{title}</h2>
        { actionButtonTitle && 
          <Button className="square" onClick={actionButton}>
            {actionButtonTitle}
          </Button>
        }
      </header>
      <main>
        {cards?.map((card) => (
          <Card 
            key={card.id}
            id={card.id}
            title={card.titulo}
            content={card.conteudo}
            list={card.lista}
            onEdit={onCardEdit}
          />
        ))}
      </main>
    </div>
  )
}

export default Collumn;


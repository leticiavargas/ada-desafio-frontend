
import { Card, Button } from 'components';
import useCards from 'hooks/useCards';

function Collumn({ title, actionButtonTitle, actionButton }) {  
/*  const { getCardList, postCard } = useCards();

  const teste = postCard({
    titulo: "titulo do card",
    conteudo: "conteudo de um card"
  })

  console.log('TESTE >>>', teste)


  getCardList();
*/
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
        <Card />
        <Card />
      </main>
    </div>
  )
}

export default Collumn;


import Collumn from "./Collumn";
import { FaPlusCircle } from "react-icons/fa";
import './styles.scss';

function Board({ handleNewCard }) {

  

  return(
    <main className="board">
      <Collumn 
        title="To Do" 
        actionButtonTitle={"Novo card"}
        actionButton={handleNewCard}
      />
      <Collumn title="Doing" />
      <Collumn title="Done" />
    </main>
  )
}



export default Board;
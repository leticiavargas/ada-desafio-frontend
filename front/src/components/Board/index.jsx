import Collumn from "./Collumn";
import './styles.scss';

function Board() {
  return(
    <main className="board">
      <Collumn title="To Do" />
      <Collumn title="Doing" />
      <Collumn title="Done" />
    </main>
  )
}



export default Board;
import { Header, Board } from 'components';
import './styles.scss';

function Kanban() {
 
  return(
    <div className='kanban'>
      <Header />
      <Board  />
    </div>
  )
}

export default Kanban;
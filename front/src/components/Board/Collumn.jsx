import { Card } from 'components';

function Collumn({ title }) {
  return(
    <div className="collumn">
      <header>{title}</header>
      <main>
        <Card />
        <Card />
      </main>
    </div>
  )
}

export default Collumn;


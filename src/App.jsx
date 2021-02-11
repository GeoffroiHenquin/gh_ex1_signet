import './App.scss';
import Entete from './Entete';
import ListeSignets from './ListeSignets';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

function App() {
  return (
    <div className="App">
      <Entete />
      <section className="contenuPrincipal">
        <ListeSignets />
      </section>
      <div className="AddButtonBottom">
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      </div>
      
    </div>
  );
}

export default App;

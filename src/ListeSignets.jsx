import './ListeSignets.scss';
import Signet from './Signet';
import tabSignets from './data/signets.json';

export default function ListeSignets(props){
    return(
        <div className="ListeSignets">
        <ul>
            {tabSignets.map(signet => 
                <Signet key={signet.id} titre={signet.titre} couleur={signet.couleur} date={signet.date} id={signet.id}/>
            )}
        </ul>
        </div>
    )
}
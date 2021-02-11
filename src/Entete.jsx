import './Entete.scss';
//import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Avatar } from '@material-ui/core';

function Entete(props){
    return(
        <header className="Entete">
            <div className="logo"><h1>SIGNETS</h1></div>
            <div className="AffichageUtilisateur">
                <h2>Geoffroi Henquin</h2>
                {/*<img src="" alt=""/>*/}
                <Avatar alt="Geoffroi Henquin" src="/static/images/avatar/1.jpg" />
            </div>
        </header>
    )
}

export default Entete;
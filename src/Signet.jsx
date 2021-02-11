import './Signet.scss'

export default function Signet(props){
    const bgCouleur = {backgroundColor:props.couleur};
    return (
        <li className="Signet" style={bgCouleur}>
            <img src={"images-signets/" + props.id + ".webp"} alt=""/>
            <div className="info">
                <p className="titre">{props.titre}</p>
                <p className="date">Modifié : {props.date }</p>
            </div>
        </li>
    )
}
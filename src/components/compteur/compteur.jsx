import PropType from 'prop-types';
import { useState } from "react";

const Compteur = (props) => {

    const { incr } = props;

    // L'état de mon bouton démarre à 0
    const [ monCompteur, setMonCompteur] = useState(0);

    const incremente = () => {
        // valeur initiale => nouvelle valeur
        setMonCompteur( monCompteur => monCompteur + incr);
    }
    const miseAzero = () => {
        setMonCompteur(0);
    }

    return(
        <>
        <h1>Mon compteur {monCompteur} </h1>
        <button onClick={incremente}>Augmente moi</button>
        
        {/* On voit mon bouton que si mon compteur est plus grand que 0 */}
        { (monCompteur > 0) && (
            <button onClick={miseAzero}>Remettre à 0</button>
        )}
        </>
    )
}
// Mon compteur augmente par défaut de 1
Compteur.defaultProps = {
    incr: 1
}

// Vérification du type des variables ( pas obligatoire )
Compteur.PropType = {
    incr : PropType.number
}

export default Compteur;
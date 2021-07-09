import { useState } from "react";


const Formulaire = () => {

    const [ msg , envoyerMsg ] = useState("");

    const gererEnvoi = e => { // e represente l'evenement envoyé par le formulaire
        e.preventDefault(); // pour éviter de raffraichir la page tant que le formulaire n'est pas envoyé
        console.log(msg);
    }

    return (
        <>     
        <form onSubmit={gererEnvoi}>
            <label>
                Entrer un message :
                {/* OnChange = dès qu'il y a un chamngement de valeur (on commence à écrire) */}
                <input type="text" name="nom" onChange={ e => envoyerMsg(e.target.value)} />
            </label>
            {/* Mon bouton envoyer */}
            <input type="submit" value="Envoyer" />
        </form>

        <p id="resultat"></p>
        </>
    )
}

export default Formulaire;
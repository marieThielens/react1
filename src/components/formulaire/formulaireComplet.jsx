import { useState } from "react";

const FormulaireComplet = () => {

    const [ nom , envoyerNom ] = useState("");
    const [ prenom , envoyerPrenom ] = useState("");
    const [ sexe, envoyerSexe ] = useState("x");
    const [ newsletter, setNewsletter] = useState("non");

    const gererEnvoi = e => { // e represente l'evenement envoyé par le formulaire
        e.preventDefault(); // pour éviter de raffraichir la page tant que le formulaire n'est pas envoyé
        
        const data = {
            nom: nom,
            prenom: prenom,
            sexe: sexe,
            newsletter: newsletter
        }
        console.log(data);
        e.target.reset(); // QAquand j'envoie le formulaire les inputs se vident après
    }
    const gererNewsletter = e => {
        setNewsletter(e.target.value);
    }
    const effacerFormulaire = e => {
        envoyerNom("");
        envoyerPrenom("");
        envoyerSexe("x");
        setNewsletter("non");
    }

    return (
        <>     
        <form onSubmit={gererEnvoi} onReset={effacerFormulaire}>
            <div>
                <label>Nom :</label>
                {/* OnChange = dès qu'il y a un chamngement de valeur (on commence à écrire) */}
                <input type="text" name="nom" onChange={ e => envoyerNom(e.target.value)} value={nom}/>
                
                <label> Prenom :</label>
                {/* value = valeur du champ ( de l'input ) */}
                <input type="text" name="prenom" onChange={ e => envoyerPrenom(e.target.value)} value={prenom} />
            </div>

            <div>
                <label>Sexe</label>
                <select name="sexe" onChange= {e => envoyerSexe(e.target.value)} value={sexe}>
                    <option value="M">M</option>
                    <option value="F">F</option>
                    <option value="x">X</option>
                </select>
            </div>

            <div>
                <label>S'inscrire à la newsletter</label>
                <label>
                    <input type="radio" name="newsletter" onChange= {gererNewsletter} value="oui" checked={newsletter === "oui"} />
                    oui
                </label>
                <label>
                    <input type="radio" name="newsletter" onChange= {gererNewsletter} value="non" checked={newsletter === "non"} />
                    non
                </label>
            </div>
   
            <div></div>
            {/* Mon bouton envoyer */}
            <input type="submit" value="Envoyer" />
            <input type="button" value="Effacer"/>
        </form>

        <p id="resultat"></p>
        </>
    )
}

export default FormulaireComplet;
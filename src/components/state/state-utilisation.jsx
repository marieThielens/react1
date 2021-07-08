import { useState } from "react";

const StateUtilisation = (props) => {

    // Création d'une variable msg à l'aide du Hook 'useState
    // Initialiser mon hook. Un message + une fonction (setMsg) qui me permet de modifier mon message
    // ( valeur initiale)
    const [msg, setMsg] = useState("message initial");
    
    const [nb, setNb] = useState(38);

    const [coordonne, setCoordonnee] = useState({ x:1, y:2 });
    
    const surLeClique = () => {
        console.log("coucou");
        setMsg("Message modifié");
    }

    return (
        <div>
            <p>Le message est : {msg}</p>
            <p>Le nombre est : {nb}</p>
            <p>Les coordonnees sont : {coordonne.x} et y : {coordonne.y} </p>

            <button onClick={surLeClique}>Clique moi</button>
        </div>
    );
}
export default StateUtilisation;
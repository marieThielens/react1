import { useState } from "react";

const monRegex = /^(-)?(\d*(\d(,|\.)\d*)?)?$/ ;

const Calculatrice = () => {

    const [ nombres, setNombres] = useState({
        nb1: "",
        nb2: ""
    });
    const [ operation, setOperation ] = useState("+");
    const  [ resultat, setResultat ] = useState("");


    const gererNombre = e => {
        const {value, name } = e.target;

        if(value === '' || monRegex.test(value)){
            setNombres({
                ...nombres,
                [name]: value
            });
        }

    }
    const gererEnvoi = e => {
        e.preventDefault();
        setResultat(resultat => {

            const  nb1 = parseFloat(nombres.nb1);
            const  nb2 = parseFloat(nombres.nb2);

            switch( operation) {

                case "+":
                    return nb1 + nb2;
                    break;
                case "-":
                    return nb1 - nb2;
                    break;
                case "*":
                    return nb1 * nb2;
                    break;
                case "/":
                    return (nb2!==0) ? (nb1 / nb2) : "division par 0";
                 
            }
        })
    }
    
    return (
        <div>
            <form onSubmit={gererEnvoi}>

            <label>Nb1 : 
                <input type="text" onChange= {gererNombre} value={nombres.nb1} name="nb1"/>
            </label>

            <label>Opération :
                <select name="operation" onChange= {e => setOperation(e.target.value)} value={operation} >
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="x">x</option> 
                    <option value="/">/</option> 
                </select>
            </label>

            <label>Nb2 : 
                <input type="text" onChange= {gererNombre} value={nombres.nb2} name="nb2" />
            </label>
            <input type="submit" value="Calculer" />

            <label>Résultat : 
                <input type="text" id="res" value={resultat} readOnly />
            </label>
        
            </form>
        </div>
    )
}
export default Calculatrice;
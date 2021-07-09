import style from './text-color.module.css';
import { useState } from "react";

const TextColor = (props) => {

    const { texte } = props;
    const [ couleur , setCouleur] = useState('');

    const changeCouleur = () => {
        if (couleur === "") {
            setCouleur(style.pink)
        }else {
            setCouleur("");
        }
    }

    return(
        <p className={couleur} onClick={changeCouleur}>{texte}</p>
    );
}
TextColor.defaultProps = {
    texte : ""
}

export default TextColor;
import PropTypes from 'prop-types';
// Importer le style
import style from './student-style.module.css';

const StudentTable = (props) => {

    const { nom, prenom, option, sexe, resultat } = props;
    
    let grade;
    if (resultat > 60 ) {
        grade = "TB"
    }

    // Ma vue
    return (
        <tr>
            <td>{nom}</td>
            <td>{ prenom }</td>
            <td>{ option }</td>
            <td>{ sexe }</td>
            <td className={resultat > 50 ? style.reussi : ""}>{ resultat }</td>
            <td>grade : {grade} </td>
        </tr> 
    )
}
// Propriété par défaut
StudentTable.defaultProps = {
    resultat : 'Pas de résultat',
    etudiens : []
}
// 
StudentTable.propTypes = {
    nom: PropTypes.string.isRequired,
    prenom : PropTypes.string.isRequired,
    option : PropTypes.string.isRequired,
    sexe : PropTypes.string.isRequired, 
    resultat : PropTypes.number  
}

export default StudentTable;
import PropTypes from 'prop-types';
// importer mon 
import StudentTable from './student_table';

const Student = (props) => {

    // convertir le objet js en jsx
    const etudidantJSX = props.etudiants.map(
        // clé unique
        el => < StudentTable key={el.id} {...el} />
    );

    // Ma vue
    return (
        // <> = Fragment. Le return ne peut avoir qu'un parent. Ceci "remplace" la div
        <>
            <h2>Liste d'atudiants</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Option</th>
                        <th>Sexe</th>
                        <th>Résultat</th>
                    </tr>
                </thead>
                <tbody>
                    { etudidantJSX }
                </tbody>
            </table>
        </>

)
}

Student.defaultProps = {
    // tableau par défaut comme ça plente pas si y a pas de tableau
    etudiants : []
}

// 
Student.propTypes = {
    // props.etudiants.map(
    etudiants : PropTypes.array
}

export default Student;
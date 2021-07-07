import PropTypes from 'prop-types';
// importer mon 
import StudentTable from './student_table';
// Importer le style
import style from './student-style.module.css';

const Student = (props) => {

    // convertir le objet js en jsx
    const etudidantJSX = props.etudiants.map(
        // clé unique
        el => < StudentTable key={el.id} {...el} />,
        // etudiants.resultat >= 50 ? style.reussi : style.rate
    );

    

    // Ma vue
    return (
        <>
            <h2>Liste d'atudiants</h2>
            <table>
                <thead>
                {/* className={ couleurReussi ? style.reussi : style.rate} */}
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


// 
Student.propTypes = {
    // props.etudiants.map(
    etudiants : PropTypes.array
}

export default Student;
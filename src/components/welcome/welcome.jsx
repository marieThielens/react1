import PropTypes from 'prop-types';

const Welcome = (props) => {

//    const nom = props.nom;
    const { nom } = props;

    return (
        <p>Bienvenue {nom}</p>
    );
}

Welcome.propTypes = {
    nom: PropTypes.string.isRequired
}

export default Welcome;
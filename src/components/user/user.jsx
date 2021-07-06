import PropTypes from 'prop-types';
import style from './user.style.module.css';

const User = (props) => {
    const { nom, age } = props;

    return (
        <div>
            <h1>Bienvenue <span className={style.titre}>{ nom } </span> sur l'application React ! </h1>
            <p>Vous avez { age }</p>
        </div>
    );
}

User.propTypes = {
    nom : PropTypes.string.isRequired,
    age : PropTypes.string.isRequired
}

export default User;
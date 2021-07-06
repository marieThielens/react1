import PropTypes from 'prop-types';
import style from './element.style.module.css';

const ElementStyle = (props) => {

const {nb1, nb2} = props;
const resultat =  nb1 + nb2

    return(
        <p> <span className={style.nb}>{ nb1 }</span> plus <span>{nb2}</span> = {resultat}</p>
    );
}
ElementStyle.defaultProps = {
    nb1 : 42,
    nb2: 0
}
// Nom de l'attribut dans l'element
ElementStyle.propTypes = {
    // nom de l'import
    nb1: PropTypes.number,
    nb2: PropTypes.number
}

export default ElementStyle;
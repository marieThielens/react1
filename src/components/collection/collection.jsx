import PropTypes from 'prop-types';

const MaCollection = (props) => {

    const listElement = props.gens.map(
        el => <li key={el.id}>{el.nom}</li>
    );
    return (
        <>
            <ul>{listElement}</ul>
        </>
    );
}

MaCollection.propTypes = {
    gens : PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        nom: PropTypes.string.isRequired
    }))
}

export default MaCollection;
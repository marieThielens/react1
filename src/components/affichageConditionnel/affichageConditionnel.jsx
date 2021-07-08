const User = (props) => {
    return( <h1>Bienvenue</h1>);
}
const Inscription = (props) => {
    return( <h1>Veuillez vous inscrire.</h1>);
}

const AffichageConditionnel = (props) => {
    const { estInscrit } = props;
    
    if (estInscrit) {
        return < user />;
    }
    return <Inscription />
}
export default AffichageConditionnel;
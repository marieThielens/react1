import React from 'react'; 
import { Component } from 'react'; // c'est l'API qui permet de gérer les composants


// Pour définir un composant React avec une classe, vous devez étendre React.Component
class ClassExemple extends React.Component {

    // Le constructeur est une méthode utilisée pour initialiser l'état d'un objet dans une classe. 
    //Il est appelé automatiquement lors de la création d'un objet dans une classe.
    constructor(props) {
    // super fait référence au constructeur de la classe parente ( = React.Component)
    // On ne peut pas utiliser this à ce stade
    super(props);
    // On peut utiliser this grace à super  

      // state est l'état initial
      this.state = { // L'état de mon bouton démarre à 0
        monCompteur: 0,
        incr: 1
      };

    }
    // Fonction flechée obligatoire. Elle permet de lier la méthode et le contexte
    // sans utiliser la méthode bind dans le constructeur
    incremente = () => {
        // setState : indique à React que qq chose à été changé et qu'il faut se mettre à jour
        this.setState(state => ({
            // valeur initiale => nouvelle valeur
            monCompteur: state.monCompteur + state.incr
        }));
    }
    miseAzero = () => {
        this.setState({ monCompteur: 0 })
    }
  
    render() { // obligatoire . Lorsqu’elle est appelée, elle examine en général this.props et this.state
      return ( // ma vue
        <>
        <h1>Mon compteur {this.state.monCompteur} </h1>
          <button onClick={this.incremente}>Augmente moi</button>

          
        {/* On voit mon bouton que si mon compteur est plus grand que 0 */}
          { (this.state.monCompteur > 0) && (
          <button onClick={this.miseAzero}>Remettre à 0</button>
          )}
        </>
      );
    }
}

export default ClassExemple;


// function Saluer() {
//     return(
//         <p>Bonjour</p>
//     )
// }

// Class Saluer extends React.Component {
//     render() {
//         return(
//                     <p>Bonjour</p>
//                 )
//     }
// }
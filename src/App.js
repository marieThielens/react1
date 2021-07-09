import { elementType } from 'prop-types';
import './App.css';
import ElementStyle from './components/elementStyle/element-style';
import Welcome from './components/welcome/welcome';
import User from './components/user/user';
import MaCollection from './components/collection/collection';
import Student from './components/student/student';
// nanoid pour générer id
import { nanoid } from 'nanoid'; // npm install nanoid

import AffichageConditionnel from './components/affichageConditionnel/affichageConditionnel';

import StateUtilisation from './components/state/state-utilisation';
import DateDuJour from './components/date-du-jour/date-du-jour';

import Compteur from './components/compteur/compteur';

import ClassExemple from './components/class/classVsHook';

import Formulaire from './components/formulaire/formulaire';

import FormulaireComplet from './components/formulaire/formulaireComplet';

import TextColor from './components/textColor/text-color';

import Calculatrice from './components/calculatrice/calculatrice';


function App() {

  // const gens = [
  //   { id: "1", nom : "Marie"},
  //   { id: "2", nom : "Isaac"},
  //   { id: "3", nom : "Toto"}
  // ]

  const etudiants = [
        // nanoid() gère un id aléatoire
        { id: nanoid(), nom: "Thielens", prenom: "Marie", option: "Informatique", sexe: "Feminin", resultat: 72},
        { id: nanoid(), nom: "Dupont", prenom: "Nathan", option: "Math", sexe: "Masculin", resultat: 82},
        { id: nanoid(), nom: "Dupont", prenom: "Nathan", option: "Math", sexe: "Masculin"}
  ]

  return (
    <div className="App">

      {/* <User nom="Aurélien" age={18}/> */}

      {/* <Welcome nom="Marie"/> */}
      {/* <ElementStyle  nb1={20} nb2={1}/> */}
      {/* <ElementStyle nb1={3} nb2={10}/> */}

      {/* <MaCollection gens={gens}/> */}


      {/* < AffichageConditionnel estInscrit={false}/>
      <Student etudiants= {etudiants}/>

     <StateUtilisation />

     <DateDuJour /> */}
     {/* <Compteur />
     <Compteur incr={5}/> */}

     {/* <ClassExemple /> */}

     {/* <Formulaire /> */}
    <TextColor texte="Marie" />
     
     <FormulaireComplet />

     <Calculatrice />

    </div>
  );
}

export default App;

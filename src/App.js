import { elementType } from 'prop-types';
import './App.css';
import ElementStyle from './components/elementStyle/element-style';
import Welcome from './components/welcome/welcome';
import User from './components/user/user';


function App() {
  return (
    <div className="App">

      <User nom="Aurélien" age={18}/>

      <Welcome nom="Marie"/>
      {/* <ElementStyle  nb1={20} nb2={1}/> */}
      <ElementStyle nb1={3} nb2={10}/>
    </div>
  );
}

export default App;

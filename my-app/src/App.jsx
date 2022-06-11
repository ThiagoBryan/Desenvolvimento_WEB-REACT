//import logo from './logo.svg';
//import './App.css';

import Cabecalho from './components/Cabecalho';
import Corpo from './components/Corpo';
import './styles.css';


function App() { 
  return ( // codigo JSX: arquivo JS que se mescla com HTML para editar os dois ao mesmo tempo
  
  <div className='container'>
    <Cabecalho></Cabecalho> {/* Tudo que vai criar começa com letra Maiuscula */}
    <Corpo></Corpo>
  </div>
  );
}

export default App;

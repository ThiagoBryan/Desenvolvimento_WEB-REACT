//import logo from './logo.svg';
//import './App.css';

import Cabecalho from './Cabecalho';
import Corpo from './Corpo';
function App() { 
  return ( // codigo JSX: arquivo JS que se mescla com HTML para editar os dois ao mesmo tempo
  
  <div>
    <Cabecalho></Cabecalho> {/* Tudo que vai criar começa com letra Maiuscula */}
    <Corpo></Corpo>
  </div>
  
  
  
  
  // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

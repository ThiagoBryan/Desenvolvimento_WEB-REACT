import React from 'react'; // quando nao tem ponto eme importa direto do node_modules
import ReactDOM from 'react-dom/client';
import App from './App'; // ./ esta importando da pasta que existe
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <App />   {/* Onde começa */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

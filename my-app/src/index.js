import React from 'react'; // quando nao tem ponto eme importa direto do node_modules
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // ./ esta importando da pasta que existe
import { TemaProvider } from './context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* GLOBAL */}
  <TemaProvider>  
    <App />   {/* Onde começa */}
    </TemaProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


//import { Button } from "@mui/material"; // import do material UI
import { useState } from "react";
import { Container } from "../../Styles"; // import da classe Styles.jsx
import { BotaoAumentar, BotaoDiminuir, BotaoZerar, Titulo } from "./Styles";
import { MensagemErro } from "./Styles";


const Contador = () => {
  //começa com use é HooK
  const [numero, setNumero] = useState(1); // criação de estado
  //altera valor   //(1) estado inicial

  const [erroAumentar, setErroAumentar] = useState(false);
  const [erroDiminuir, setErroDiminuir] = useState(false);

  const aumentarValor = () => {
    if (numero >= 10) {
        setErroAumentar(true);
      return;
    } 

    setNumero(numero + 1);
  };
  const diminuirValor = () => {
    if (numero <= -10) {
        setErroDiminuir(true);
      return;
    }

    setNumero(numero - 1);
  };
  const zerarValor = () => {
      setNumero(0);
    setErroDiminuir(false);
  }
  return (
    <Container>
      <Titulo>Contador</Titulo>
      {/* PROP: Parametros dos Componentes React */}
      {erroAumentar && <MensagemErro>Não é possível acrescentar</MensagemErro>}
      <BotaoAumentar onClick={() => aumentarValor()}>Aumentar</BotaoAumentar>
      {/*() =>para chamar a função*/}
      <Texto valor={numero} />
      {erroDiminuir && <MensagemErro>Não é possível diminuir</MensagemErro>}
      <BotaoDiminuir onClick={() => diminuirValor()}>Diminuir</BotaoDiminuir>
      <BotaoZerar onClick={() => zerarValor()} variant="contained" 
      disabled={numero === 0}>Zerar</BotaoZerar> {/** disabled: Botao fica desativado quando nao for 0 */}
    </Container>
  );
};
//PROP Parametros dos Componentes React
const Texto = ({ valor }) => {
  return <span>{valor}</span>;
};

export default Contador;



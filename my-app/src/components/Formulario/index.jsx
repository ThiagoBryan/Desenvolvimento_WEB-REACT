import { useState } from "react";// import do useState
import styled from "styled-components";// import do styled
import { Container } from "../../Styles";



const InputWrapper = styled.div`
  width: 100%;
  `;

              // EXPLICAÇÃO
//DECLARAÇÃO DA FUNÇÃO
const Formulario = () => {
  //Estado é parecido com get; set; porém sofre alterações e renderiza de novo
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  // const [get ou valor, set ou alteração da variavel] = usestate(valor inicial que vem no get)
  const alterarNome = (e) => {
    // Função que chama o set e altera o estado
    setNome(e.target.value)
  };
  //RETORNO DO CÓDIGO VISUAL (PSEUDO=HTML, JSX)
  return (// retorno sempre entre ()
    <>
    <Container>
      
    <InputWrapper>
      <input
        value={nome}
        onChange={e  => alterarNome(e)}
        placeholder="Digite seu nome"
      />
      {nome}
      </InputWrapper>
      <InputWrapper>
      <input
        value={email}
        onChange={e  => setEmail(e.target.value)}
        placeholder="Digite seu email"
      />
      {email} {/* APENAS PARA VER SE ESTAR FUNCIONANDO */}  
      </InputWrapper>
      </Container>
    </>
      
  );
};
// EXPORTAR O COMPONENTE PARA PERMITIR IMPORTAÇÃO EM OUTROS ARQUIVOS
export default Formulario;

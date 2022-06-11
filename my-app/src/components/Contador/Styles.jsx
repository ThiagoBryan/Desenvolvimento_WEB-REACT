import styled from "styled-components";

export const Titulo = styled.h3`
  font-size: 20px ;
  font-family: sans-serif;
  color: #5c0fa4;
`;

export const BotaoAumentar = styled.button`
  background-color: #4e034e;
  color: #fff;
  border: 1px solid #ae66ae;
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #780778;
  }
`;

export const BotaoDiminuir = styled.button`
  background-color: #4e034e;
  color: #fff;
  border: 1px solid #ae66ae;
  padding: 10px;
  margin-left: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #780778;
  }
`;
export const BotaoZerar = styled.button`
  background-color: #4e034e;
  color: #fff;
  border: 1px solid #ae66ae;
  padding: 10px;
  display: block;
  margin-top: 10px;
  margin-left: 65px;
  border-radius: 5px;

  &:hover {
    background-color: #780778;
  }
`;

export const MensagemErro = styled.p`
 
 //margin-top: 50px;
 color: red;
`;



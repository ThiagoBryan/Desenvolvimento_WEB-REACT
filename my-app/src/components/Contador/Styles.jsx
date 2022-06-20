import styled from "styled-components";
import { Button } from "@mui/material";

export const Titulo = styled.h3`
  font-size: 20px ;
  font-family: sans-serif;
  /* color: #5c0fa4; */
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

export const MensagemErro = styled.p`
 
 //margin-top: 50px;
 color: red;
`;
export const BotaoZerar = styled(Button)`
   && { width: 73px;
    height: 31px;
    display: block;
    padding: 3px;
    margin-top: 10px;
    margin-left: 60px;
    font-size: 15px ;
    color: #fff ;
    background-color: #4e034e;
    border-radius: 5px;

    &:hover {
    background-color: #780778;
  }
  }
`;


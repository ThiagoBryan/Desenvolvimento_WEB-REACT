import { useContext } from "react";
import { TemaContext } from "../../context";
import Contador from "../Contador";
import Formulario from "../Formulario";
import Lista from "../Lista";
import ListagemProdutos from "../ListagemProdutos";
import Produto from "../Produto";

function Corpo() {
const { temaSelecionado } = useContext(TemaContext);

  const produtos = [
    {
      nome: "PS5 & PS4",
      valor: 8000,
      imagem:
        "https://blog.br.playstation.com/tachyon/sites/4/2022/03/0158db50165bceb8b7a13f632de7f54d9ccd0c7c.jpg?resize=1088%2C612&crop_strategy=smart&zoom=1.5",
    },
    {
      nome: "Batata doce",
      valor: 50,
      imagem:
        "https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/iStock-496551718[1]-1000x1000.jpg",
    },
    {
      nome: "Bala halls",
      valor: 2.5,
      imagem:
        "https://www.drogariaminasbrasil.com.br/media/product/b97/bala-halls-extra-forte-bb7.jpg",
    },
  ];

  const tema = {
    claro: {
      backgroundColor: '#c20303',
      color: "#e9d7d7 " 
    },
    escuro : {
      backgroundColor: '#050505',
      color: "#641616"
    }
  } 

  return (
    <div>
      <Contador />
      <Formulario />
      <ul style={tema[temaSelecionado]} >
        <Lista.Item conteudo="Paraguai" />
        <Lista.Item conteudo="Uruguai" />
        <Lista.Item conteudo="Argentina" />
        <Lista.Item conteudo="Venezuela" />
      </ul>

      <ListagemProdutos>
        {produtos.map((produto) => {
          return (
            <Produto
              nome={produto.nome}
              valor={produto.valor}
              imagem={produto.imagem}
            />
          );
        })}
      </ListagemProdutos>
    </div>
  );
}
export default Corpo;

import { ListaEstilizada } from "./Styles";
           // obrigatorio ser children para que o REACT entenda que são filhos da Lista
const Lista = ({children}) => {
    return <ListaEstilizada>{children}</ListaEstilizada>
}

export default Lista;
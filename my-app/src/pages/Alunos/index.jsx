import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import axios from "axios"; //API
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import carregandoAnimacao from "../../animations/loading.json";


const Alunos = () => {
  const [alunos, setAlunos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: carregandoAnimacao,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  //Imutabilidade
  //alunos1 -> []
  //alunos2 -> [{}]
  //alunos3 -> {}

  //API
  //GET - PEGAR UMA INFORMAÇÃO
  //POST - CADASTRA/CRIA UMA INFORMAÇÃO
  //PUT - ALTERAR/EDITA UMA INFORMAÇÃO
  //DELETE - DELETAR UMA INFORMAÇÃO

  useEffect(() => {
                                                //  .then(results) => pega todos os dados
    axios.get("https://randomuser.me/api/?results=5").then(({ data }) => {
      setAlunos(data.results);
    });
  }, []); //[] Construtor, quando o useEffect funcionar ele executa

  useEffect(() => {
    if (alunos.length > 0) {
      setTimeout(() => {
        //timeout
        setCarregando(false);
      }, 800); //timeout
    }
  }, [alunos]);

  return (
    <>
      

      <Container maxWidth="sm">
        {carregando ? ( // se carregando for true(?)
          <Lottie // animação de loading
            options={defaultOptions} //executa o Carregando
            height={400}
            width={400}
            speed={2} //velocidade de rotação
          />
        ) : (
          //se for false(:) executa;
          //TABELA                    *sx={{mt:3}} => margin-top
          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="right">Nome</TableCell>
                  <TableCell align="right">Idade</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {alunos.map((aluno) => (
                  <TableRow
                    key={aluno.id.value}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">{aluno.id.value}</TableCell>
                    <TableCell align="right">{aluno.name.first}</TableCell>
                    <TableCell align="right">{aluno.dob.age}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </>
  );
};

export default Alunos;

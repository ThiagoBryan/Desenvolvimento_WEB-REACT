import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { MyLink } from "../../Styles"; // import link
import { useContext } from "react"; //GLOBAL
import { TemaContext } from "../../context"; //GLOBAL

const NavBar = () => {
    const { temaSelecionado, setTemaSelecionado } = useContext(TemaContext); //GLOBAL

//setTemaSelecionado(temaSelecionado === "claro" ? "escuro" : "claro")
        //OU
const alterarTema = () => {
    if (temaSelecionado === "claro"){
        setTemaSelecionado("escuro")
    }else {
        setTemaSelecionado("claro")
    }
}

  return (
        //NAVBAR
      <Box sx={{ flexGrow: 1 }}>
        {" "}
        {/*sx={{background:'#ff5555'}} = cor da NAVBAR */}
        <AppBar position="static" sx={{ background: "#ff5555" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 20 }}
            >
              {/* <MenuIcon /> */}

              <Button color="inherit">
                <MyLink to="/alunos">Alunos</MyLink>
              </Button>
              <Button color="inherit">
                <MyLink to="/">Contador</MyLink> {/* para criar link */}
              </Button>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">
              <MyLink to="/materias/cadastro">Cadastro</MyLink>{" "}
              {/* para criar link */}
            </Button>
            <Button color="inherit">
              <MyLink to="/materias/listagem">Listagem</MyLink>
            </Button>
            <Button color="inherit" onClick={alterarTema}>
              Alterar Tema
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    
  );
};

export default NavBar;

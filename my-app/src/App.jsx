import "./styles.css";
import { Routes, Route} from "react-router-dom";
import ArmazemSerratec from "./pages/ArmazemSerratec";
import Alunos from "./pages/Alunos";

function App() {
  return (
    // codigo JSX: arquivo JS que se mescla com HTML para editar os dois ao mesmo tempo

    <div className="container">
      <Routes>
        <Route path="/" element={<ArmazemSerratec />} />
        <Route path="/alunos" element={<Alunos />} />
      </Routes>
    </div>
  );
}

export default App;

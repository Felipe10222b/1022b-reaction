import './App.css';
import MeuComponente from './componentes/MeuComponente';

function App() {
  let nome = "Felipe";
  let sobrenome = "Santos Silva";

  return (
    <>
      <MeuComponente />
      <h1 className="nome">Nome: {nome}</h1>
      <p className="sobrenome">{sobrenome}</p>
    </>
  );
}

export default App;

import Paragraphs from './components/paragraphs/paragraphs'
import Buttons from './components/buttons/buttons';
import './App.css';

function App() {
  return (
    <>
      <h1>Componente de Texto</h1>

      <Paragraphs />

      <hr />

      <h1>Alerta com label</h1>

      <Buttons />
    </>
  );
}

export default App;

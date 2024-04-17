import './App.css';
import { ConteudoCentral } from './components/center/ConteudoCentral';
import { ConteudoLateralEsquerda } from './components/left/ConteudoLateralEsquerda';

export function App() {
  return (
    <div className='wrapper'>
      <ConteudoLateralEsquerda />
      <ConteudoCentral />
    </div>
  );
}


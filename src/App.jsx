import './App.css';
import { ConteudoCentral } from './components/center/ConteudoCentral';
import { ConteudoLateralEsquerda } from './components/left/ConteudoLateralEsquerda';
import { ConteudoLateralDireita } from './components/right';

export function App() {
  return (
    <div className='wrapper'>
      <ConteudoLateralEsquerda />
      <ConteudoCentral />
      <ConteudoLateralDireita />
    </div>
  );
}


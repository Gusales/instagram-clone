import { Suggestion } from './Suggestion'
import { Suggestions } from './Suggestions'
import './style.css'

export function ConteudoLateralDireita(){
  return(
    <aside className="conteudo_lateral_direita_container">
      <Suggestion imageUrl="https://github.com/gusales.png" nickName="gussales13" name="Gu Sales" itsMe />

      <div className="contedo_lateral_direita_divider">
        <p>Sugestões para você</p>
        <p className="bold">Ver tudo</p>
      </div>

      <Suggestions />

      <p>Sobre • Ajuda • Imprensa • API Carreiras • Privacidade • Termos Localizações • Idioma • Meta Verified</p>

      <p>© 2024 INSTAGRAM CLONE MAKED BY DEVGUSALES</p>
    </aside>
  )
}
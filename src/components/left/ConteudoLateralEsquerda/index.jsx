import InstagramLogoTipo from '../../../assets/instagram-logotipo.png'

import { CgProfile } from "react-icons/cg";

import { Actions } from './actions'
import { MenuItem } from './menu-item'

import './style.css'

export function ConteudoLateralEsquerda() {
  return(
    <aside>
      <img src={InstagramLogoTipo} alt="Logotipo do Instagram" className="logotipo_instagram" />
      <Actions />
      <div className="profile">
        <MenuItem name="Perfil" icon={<CgProfile />} />
      </div>
    </aside>
  )
}
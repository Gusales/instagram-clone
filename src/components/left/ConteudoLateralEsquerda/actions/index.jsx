import { CiHome, CiSquarePlus } from "react-icons/ci";
import { FaMagnifyingGlass, FaHeart } from "react-icons/fa6";
import { TbMessageCircleBolt } from "react-icons/tb";

import { MenuItem } from "../menu-item";

import './style.css'

export function Actions() {
  return(
    <ul>
      <MenuItem name="Feed" icon={<CiHome />} />
      <MenuItem name="Buscar" icon={<FaMagnifyingGlass />} />
      <MenuItem name="Mensagens" icon={<TbMessageCircleBolt />} />
      <MenuItem name="Notificações" icon={<FaHeart />} />
      <MenuItem name="Postar" icon={<CiSquarePlus />} />
    </ul>
  )
}
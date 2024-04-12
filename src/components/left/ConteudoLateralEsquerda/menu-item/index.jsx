import './style.css'

export function MenuItem(props) {
  return(
    <li>
      <span>{props.icon}</span>
      <span>{props.name}</span>
    </li>
  )
}
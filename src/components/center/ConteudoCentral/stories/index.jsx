import { Story } from "../story"

import './style.css'

const users = [
  {
    name: "Gustavo Sales",
    image_url: "https://github.com/Gusales.png"
  },
  {
    name: "Gabriel Azevedo",
    image_url: "https://github.com/gabaugusto.png"
  },
  {
    name: "Gabriel Braz",
    image_url: "https://github.com/bieelbrz.png"
  },
  {
    name: "Lucas Tomaz",
    image_url: "https://github.com/LucasLTM.png"
  },
]

export function Stories() {
  return(
    <header className="content_header">
      {
        users.map((user, index) => {
          return <Story name={user.name} image_url={user.image_url} key={index} />
        })
      }
    </header>
  )
}
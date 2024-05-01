import { Story } from "../story"

import './style.css'

const users = [
  {
    name: "Gustavo Sales",
    image_url: "https://github.com/Gusales.png",
    isClosedFriends: false,
  },
  {
    name: "Gabriel Azevedo",
    image_url: "https://github.com/gabaugusto.png",
    isClosedFriends: true,
  },
  {
    name: "Gabriel Braz",
    image_url: "https://github.com/bieelbrz.png",
    isClosedFriends: false,
  },
  {
    name: "Lucas Tomaz",
    image_url: "https://github.com/LucasLTM.png",
    isClosedFriends: false,
  },
  {
    name: "Emy",
    image_url: "https://github.com/EmillyMLFreitas.png",
    isClosedFriends: true,
  },
  {
    name: "Diogo Antonny",
    image_url: "https://github.com/DiogoJP202.png",
    isClosedFriends: false,
  },
  {
    name: "Gerson Silva",
    image_url: "https://github.com/G3rsonBR.png",
    isClosedFriends: false,
  },
]

export function Stories() {
  return(
    <header className="content_header">
      {
        users.map((user, index) => {
          return <Story name={user.name} image_url={user.image_url} key={index} myStory={index === 0} isClosedFriends={user.isClosedFriends} />
        })
      }
    </header>
  )
}
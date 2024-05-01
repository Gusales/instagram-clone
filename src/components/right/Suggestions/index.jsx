import { Suggestion } from "../Suggestion"

import './style.css'

const suggestions = [
  {
    image_url: 'https://github.com/Fernanda-Kipper.png',
    nickName: 'kipperdev',
    name: 'Fernanda Kipper'
  },
  {
    image_url: 'https://github.com/filipedeschamps.png',
    nickName: 'filipedeschamps',
    name: 'Filipe Deschamps'
  },
  {
    image_url: 'https://github.com/professorguanabara.png',
    nickName: 'professorguanabara',
    name: 'Gustavo Guanabara'
  },
  {
    image_url: 'https://github.com/diego3g.png',
    nickName: 'diego3g',
    name: 'Diego Fernandes'
  },
  {
    image_url: 'https://github.com/maykbrito.png',
    nickName: 'maykbrito',
    name: 'Mayk Brito'
  },
]

export function Suggestions() {
  return(
    <ul className="suggestions_list">
      {
        suggestions.map(suggestion => (
          <Suggestion imageUrl={suggestion.image_url} nickName={suggestion.nickName} name={suggestion.name} />
        ))
      }
    </ul>
  )
}
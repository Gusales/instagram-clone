import './style.css'

export function Suggestion({imageUrl, nickName, name, itsMe = false}) {
  return (
    <div className="suggestion_container">
      <img src={imageUrl} alt="Imagem de perfil de Gustavo Sales" className="suggestion_image" />

      <div className="suggestion_names">
        <p className="suggestion_nick_name">{nickName}</p>
        <p className="suggestion_name">{name}</p>
      </div>

      <button className="suggestion_button">
        {!itsMe ? 'Seguir' : 'Mudar'}
      </button>
    </div>
  )
}
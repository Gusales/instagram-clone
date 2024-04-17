import './style.css'

export function Story(props) {
  return(
    <section className="story_field">
      <img src={props.image_url} className="profile_image" alt={`Imagem de perfil de ${props.name}`} />
      <p className="profile_name">{props.name}</p>
    </section>
  )
}
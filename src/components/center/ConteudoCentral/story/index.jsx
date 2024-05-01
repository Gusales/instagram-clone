import { FaPlus } from "react-icons/fa";
import './style.css'

export function Story(props) {
  return(
    <section className={`story_field ${props.myStory ? 'my_story' : ''}`}>
      <div className={`story_image ${props.myStory && 'post_new_story'} ${props.isClosedFriends && 'close-friends'}`}>
        <img src={props.image_url} className="profile_image" alt={`Imagem de perfil de ${props.name}`} />
        {props.myStory && (
          <div className="icon_plus">
            <FaPlus className="icon_add_story" fontSize={12} color="#ffffff" />
          </div>
        )}
      </div>
      <p className="profile_name">{props.myStory ? 'Seu story' : props.name}</p>
    </section>
  )
}
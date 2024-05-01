import './style.css'

import { MdMoreHoriz } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { BsChat } from "react-icons/bs";

import { LikeButton } from "./like-button"

export function Post(props) {
  return(
    <article className="post">
      <header className="card-header">
        <div className="posted_by">
          <div className="posted_by_image">
            <img src={props.userImagePost} alt={`Foto de perfil de ${props.userNamePost}`} className="image_profile_post" />
          </div>
          <h3>{props.userNamePost}</h3>
        </div>

        <button>
          <MdMoreHoriz />
        </button>
      </header>

      <div className="card-body">
        <img src={props.post_image} alt="" />
        <div className="actions">
          <LikeButton />
          <BsChat />
           <IoIosSend />
        </div>
      </div>

      <footer className="post-footer">
        <p><b>{props.userNamePost}</b>: {props.body}</p>
      </footer>
    </article>
  )
}
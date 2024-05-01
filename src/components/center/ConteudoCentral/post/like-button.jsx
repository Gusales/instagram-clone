import { useState } from "react"

import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";

import './like-button.css'

export function LikeButton() {
  const [isLiked, setIsLiked] = useState(false)

  function handleLike() {
    setIsLiked(state => !state)
  }
  return(
    <button onClick={handleLike} className="like_button">
      {isLiked ? <FcLike style={{ fontSize: '1.5rem' }} /> : <CiHeart style={{ fontSize: '1.5rem' }} />}
    </button>
  )
}

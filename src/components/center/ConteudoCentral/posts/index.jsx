import { Post } from '../post';

import Post1 from './assets/post1.png'
import Post2 from './assets/post2.png'

import Avatar1 from './assets/avatar1.jpg'
import Avatar2 from './assets/avatar2.jpg'

import './style.css'

const posts = [
  {
    postedBy: {
      user: 'jujutsubrasil',
      user_image: Avatar1
    },
    postContent: {
      image_url: Post2,
      description: 'Toji Fushiguro from Jujutsu Kaisen'
    }
  },
  {
    postedBy: {
      user: 'kimetsu.no.yaiba_br',
      user_image: Avatar2
    },
    postContent: {
      image_url: Post1,
      description: `As séries japonesas animadas podem até parecer coisas supérfluas ou infantis para alguns, mas por trás de toda obra temos uma mensagem para seu telespectador.`,
    }
  },
]

export function Posts(){
  return(
    <section className="posts_container">
      {
        posts.map(post => (
          <Post 
            userNamePost={post.postedBy.user}
            userImagePost={post.postedBy.user_image}
            post_image={post.postContent.image_url}
            body={post.postContent.description}
          />
        ))
      }
    </section>
  )
}
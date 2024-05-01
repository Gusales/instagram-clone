import { Posts } from "./posts";
import { Stories } from "./stories";

import './style.css'

export function ConteudoCentral(){
  return(
    <main className="content_main">
      <Stories />
      
      <Posts />
    </main>
  )
}
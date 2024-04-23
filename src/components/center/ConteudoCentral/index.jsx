import { Post } from "./post";
import { Stories } from "./stories";

export function ConteudoCentral(){
  return(
    <main className="content_main">
      <Stories />
      <Post 
        title="Meu primeiro post" 
        image_url="https://static.wikia.nocookie.net/0b1c376c-8479-4742-9744-597f7b1ec5e5/scale-to-width/755"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tempora, unde voluptates voluptatibus in, sed placeat laudantium modi ipsum iure ex non ad, eaque saepe provident consequuntur velit fugit quo."
      />
    </main>
  )
}
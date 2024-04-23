export function Post(props) {
  return(
    <section className="card post">
      <header>
        <h3>{props.title}</h3>
      </header>

      <div>
        <img src={props.image_url} alt="" />
        <p>{props.body}</p>
      </div>

      <footer className="card-footer"></footer>
    </section>
  )
}
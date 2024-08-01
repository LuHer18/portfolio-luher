
export const CardProject = () => {

  const urlImage = `/assets/${'calendar'}.webp`

  return (
    <article>
        <img src={urlImage} alt="imagen proyecto" />
        <div>
            <h2>Titulo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt tempora optio cum necessitatibus nisi aspernatur dolorem tempore repellat harum odio cupiditate nihil repellendus libero, molestias velit voluptatum inventore delectus.</p>
            <button>Demo</button>
            <button>Repo</button>
        </div>
    </article>
  )
}

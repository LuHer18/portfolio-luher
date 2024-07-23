import style from './Content.module.css'
export const Content = () => {
  return (
    <section className={style.container}>
        <article className={`${style.bg} ${style.yellowb}`}>About</article>
        <article className={`${style.bg} ${style.blueb}`}>Project</article>
        <article className={`${style.bg} ${style.redb}`}>contact</article>
        <article className={`${style.bg} ${style.blueb}`}>curriculum</article>
        <article className={`${style.bg} ${style.yellowb}`}>skills</article>
    </section>
  )
}

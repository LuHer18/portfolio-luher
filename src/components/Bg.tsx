import bg from "./Bg.module.css";

export const Bg = () => {
    return (
        <div className={bg.container}>
            <section className={bg.purple}>rojo</section>
            <section className={bg.red}>blue</section>
            <section className={bg.blue}>yellow</section>
            <section className={bg.purple2}>red</section>
        </div>
    )
}

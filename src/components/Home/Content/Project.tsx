import { useNavigate } from 'react-router-dom';
import imageProject from '../../../assets/imageProjects.webp'
import style from './Project.module.css'

type PropsProject = {
    title: string;
}

export const Project = ({ title }: PropsProject) => {

    const navigate = useNavigate();
    
    const onNavigate = () => {
        navigate("/projects")
    }

    return (
        <section className={style.projectContainer}>
            <h2 className={`title2`}>{title}</h2>
            <div className={style.containerButton}>
                <img className={style.imageButton} src={imageProject} alt="imagen de proyectos agrupada" />
                <button className={`button-text button-style ${style.buttonProject}`} onClick={onNavigate} >Ver proyectos</button>
            </div>
        </section>
    )
}

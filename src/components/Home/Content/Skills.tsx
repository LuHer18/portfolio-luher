import { Curriculum } from '../../../type';
import style from './Skills.module.css'
interface SkillsProps {
    title: string;
    data: Curriculum | null
}

export const Skills = ({ title, data }: SkillsProps) => {
    const skills = data?.skills;

    return (
        <section className={style.slider}>
            <h2 className='title2'>{title}</h2>
            <div className={style.slideTrack}>
                {
                    skills?.map(skill => {
                        const skillImage  = `/assets/icons-skills/${skill.image}.svg`
                        return (
                            <div className={style.slide}>
                                <img src={skillImage} alt={skill.name} />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

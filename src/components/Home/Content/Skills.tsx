import { Curriculum } from '../../../type';
import style from './Skills.module.css'
interface SkillsProps {
    title: string;
    data: Curriculum | null
}

export const Skills = ({ title, data }: SkillsProps) => {
    const skills = data?.skills;

    return (
        <section className={style.container}>
            <h2 className='title2'>{title}</h2>
            <div className={style.slider}>
                <div className={style.slideTrack}>
                    {
                        skills?.map(skill => {
                            const skillImage = `/assets/icons-skills/${skill.image}.svg`
                            return (
                                <div className={style.slide} key={skill.name}>
                                    <img className={style.imageSkills} loading='lazy' src={skillImage} alt={skill.name} />
                                </div>
                            )
                        })
                    }
                    {
                        skills?.map(skill => {
                            const skillImage = `/assets/icons-skills/${skill.image}.svg`
                            return (
                                <div className={style.slide} key={skill.name}>
                                    <img className={style.imageSkills} src={skillImage} alt={skill.name} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

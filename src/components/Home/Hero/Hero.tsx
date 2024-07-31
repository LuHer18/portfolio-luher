import { useContext } from 'react'
import { IconAvatar } from '../../Icons'
import style from './Hero.module.css'
import { LanguageContext } from '../../../context/LanguageContext'
import { Mail, GitHub, LinkedIn } from '../../Icons'

interface SocialIcon {
  [key: string]: React.ComponentType;
}

export const Hero = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return null
  }
  const { data } = context

  const socialIcon: SocialIcon = { GitHub, LinkedIn }
  const info = data?.basics

  return (
    <section className={style.hero}>
      <div className={style.container}>
        <div className={style.iconAvatar} >
          <IconAvatar />
        </div>
        <div className={style.personalInfo}>
          <h1 className='title1'>{info?.name}</h1>
          <h3 className='title3'>{info?.label}</h3>
          <h3 className='title3'>{info?.location.city}, {info?.location.region}</h3>
        </div>
        <footer className={style.footerBasic}>
          <a
            href={`mailto:${info?.email}`}
            title={`Enviar un correo electrónico a ${info?.name} al correo ${info?.email}`}
            target='_blank'
            rel='noopener noreferrer'
          ><Mail />
          </a>
          {
            info?.profiles.map(profile => {
              const Icon = socialIcon[profile.network]

              return (
                <a
                  key={profile.network}
                  href={profile.url}
                  title={`Visitar el perfil de ${info?.name} en ${profile.network}`}
                  target='_blank'
                  rel='noopener noreferrer'

                >
                  <Icon />
                </a>
              )
            })
          }
        </footer>

      </div>
    </section>
  )
}

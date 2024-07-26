import style from './IconAvatar.module.css'
import avatar from '../../assets/avatar-luher.webp'
import ironLuher from '../../assets/avatar-ironluher.webp'



export const IconAvatar = () => {
  return (
    <div className={style.avatarContainer}>
        <img src={avatar} alt="Avatar LuHer" className={style.avatar} />
        <img src={ironLuher} alt="Avatar IronMan Helmet" className={style.avatarHelmet} />
    </div>
  )
}

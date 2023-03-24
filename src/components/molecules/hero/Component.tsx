import defaultAvatar from '../../../images/default.png'
import { PrimaryBtn } from '../../atoms/primaryBtn/Component'
import styles from './style.module.css'

export const Hero = ():JSX.Element => {
    console.log(defaultAvatar)
    return(
        <div className={styles['hero-wrapper']}>
            <img className={styles['hero-img']} src={defaultAvatar}/>
            <PrimaryBtn>Nieuwe Sessie</PrimaryBtn>
        </div>
    )
}

import defaultAvatar from '../../../images/default.png'
import loadingAvatar from '../../../images/thinking_roel.png'
import successAvatar from '../../../images/thumbs_roel.png'
import { PrimaryBtn } from '../../atoms/primaryBtn/Component'
import styles from './style.module.css'

interface Props{
    variant: 'default' | 'loading' | 'success'
}

export const Hero = (props: Props):JSX.Element => {
    let imgSrc: string
    const getAvatarVariant = (): string => {
        switch (props.variant) {
            case 'loading':
                imgSrc = loadingAvatar
                break
            case 'success':
                imgSrc = successAvatar
                break
            default: 
            imgSrc = defaultAvatar
        } return imgSrc
    }
    
    return(
        <div className={styles['hero-wrapper']}>
            <img className={styles['hero-img']} src={getAvatarVariant()}/>
            <PrimaryBtn>Nieuwe Sessie</PrimaryBtn>
        </div>
    )
}

import { useEffect, useState } from 'react';
import { TextBubble } from '../../atoms/textBubble/Component'
import styles from './style.module.css';

export const ChatBox = (): JSX.Element => {
    const ReturnSmth = ():JSX.Element =>{
        return <TextBubble children='Wat heb je vandaag gedaan?' sender='app' />
    }
    const [active, setActive] = useState<boolean>(false)
    useEffect(()=>{
        const greeting = setTimeout(()=>{
            setActive(true)
        }, 2000)
        return() => clearTimeout(greeting)
    }, [])

    return (
        <div className={styles['chat-container']} id="chatBox">
            <TextBubble children='Hallo' sender='app' />
            { active ? <ReturnSmth/>: null }
        </div>
    )
}

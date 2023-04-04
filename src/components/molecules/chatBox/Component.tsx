import { useEffect, useState } from 'react';
import { TextBubble } from '../../atoms/textBubble/Component'
import styles from './style.module.css';

export const ChatBox = (): JSX.Element => {
    const [greetingActive, setGreetingActive] = useState<boolean>(false)
    const [secondMsgActive, setSecondMsgActive] = useState<boolean>(false)

    const ReturnGreeting = ():JSX.Element =>{
        return <TextBubble children='Hallo!' sender='app' />
    }

    const ReturnSecondMsg = ():JSX.Element =>{
        return <TextBubble children='Zou je mij kunnen vertellen over je recente activiteiten?' sender='app' />
    }

    useEffect(()=>{
        const greeting = setTimeout(()=>{
            setGreetingActive(true)
        }, 1000)
        return() => clearTimeout(greeting)
    }, [])

    useEffect(()=>{
        const secondMsg = setTimeout(()=>{
            setSecondMsgActive(true)
        }, 2000)
        return() => clearTimeout(secondMsg)
    }, [])

    return (
        <div className={styles['chat-container']} id="chatBox">
            { greetingActive ? <ReturnGreeting/> : null }
            { secondMsgActive ? <ReturnSecondMsg/> : null }
        </div>
    )
}

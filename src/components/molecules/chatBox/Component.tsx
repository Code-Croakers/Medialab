import { TextBubble } from '../../atoms/textBubble/Component'
import styles from './style.module.css';

export const ChatBox = (): JSX.Element => {
    return (
        <div className={styles['chat-container']} id="chatBox">
            <TextBubble children='Hallo' sender='app' />
            <TextBubble children='Wat heb je vandaag gedaan?' sender='app' />
        </div>
    )
}

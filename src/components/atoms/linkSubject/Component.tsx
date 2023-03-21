import styles from './style.module.css'  

interface Props{
    children: string
}

export const LinkSubject = (props: Props):JSX.Element => {

    return(
        <>
            <button 
            className={ styles["a-linkSubject"] }
            >
                {props.children}
            </button>
        </>
    )
}
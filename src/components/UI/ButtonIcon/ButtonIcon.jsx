import styles from './ButtonIcon.module.css'

export const ButtonIcon = ({icon, onClick, text = ''}) => {

    return (
        <button className={styles.buttonIcon} onClick={onClick}>
            <img src={icon}></img>
            {text === '' ? <></> : <span>{text}</span>}
        </button>
    )
}
import styles from './Input.module.css'

export const Input = ({value, onChange, placeholder=''}) => {

    return (
        <textarea 
            className={styles.textarea} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder}
        >
        </textarea>
    )
}
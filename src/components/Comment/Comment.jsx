import styles from './Comment.module.css'

export const Comment = ({ comment }) => {
    return (
        <div className={styles.comment}>
            <img className={styles.commentImg} src='/src/assets/user.png'></img>
            <div className={styles.commentText}>
                <span className={styles.commentUser}>Анонимный пользователь</span>
                <span className={styles.commentBody}>{comment}</span>
            </div>
        </div>
    )
}
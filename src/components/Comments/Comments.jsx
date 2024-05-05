import { useParams } from "react-router-dom"
import { CommentForm } from "../CommentForm/CommentForm"
import { CommentsList } from "../CommentsList/CommentsList"
import styles from "./Comments.module.css"

export const Comments = () => {

    const { movieId } = useParams()

    return (
        <div className={styles.comments}>
            <span className={styles.commentsTitle}>Комментарии</span>
            <CommentForm movieId={movieId}></CommentForm>
            <CommentsList movieId={movieId}></CommentsList>
        </div>
    )
}
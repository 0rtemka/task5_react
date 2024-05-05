import { useState } from "react"
import { useDispatch } from "react-redux"
import styles from "./CommentForm.module.css"
import { addComment } from "../../store/reducers/commentsSlice"
import { Input } from "../UI/Input/Input"
import { Button } from "../UI/Button/Button"

export const CommentForm = ({movieId}) => {

    const [comment, setComment] = useState('')
    const dispatch = useDispatch()

    const addCommentClick = (e, comment) => {
        e.preventDefault()
        dispatch(addComment({movieId: movieId, body: comment}))
        setComment('')
    }

    const onInputChange = (e) => {
        setComment(e.target.value)
    }

    return (
        <form className={styles.commentForm}>
            <Input value={comment} onChange={onInputChange} placeholder='Введите комментарий'></Input>
            <Button onClick={(e) => addCommentClick(e, comment)}>Добавить</Button>
        </form>
    )
}
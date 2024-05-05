import styles from './CommentsList.module.css'
import { useSelector } from 'react-redux';
import { Comment } from '../Comment/Comment';

export const CommentsList = ({movieId}) => {

    const comments = useSelector(state => state.comments)
        .filter(comment => comment.movieId == movieId)

    return (
        <div className={styles.commentsList}>
            {comments.length === 0 ? 
                <div>Пока нет комментариев</div> :
                comments.map(comment => 
                    comment.movieId == movieId ?
                        <Comment key={comment.id} comment={comment.body}></Comment> :
                        <></>
            )}
        </div>
    )
}
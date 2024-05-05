import styles from './Rating.module.css'

export const Rating = ({value}) => {

    const getStyle = (value) => {
        if (value >= 7) return 'ratingGood'
        else if (value >= 5) return 'ratingNeutral'
        else return 'ratingBad'
    }

    return (
        <div title="Рейтинг здесь взят для примера и не несет цели кого-либо оскорбить :)" className={`${styles.rating} ${styles[getStyle(value)]}`}>
            {value}
        </div>
    )
}
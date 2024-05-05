import styles from './GenresForm.module.css'

export const GenresForm = ({genres, onChange}) => {
    return (
        <form className={styles.genresFilter}>
            {genres.map((genre, index) => 
                    <label key={index} className={styles.genreCheckBox}>
                         <span>{genre.name}</span>
                         <input checked={genre.selected} type="checkbox" onChange={() => onChange(genre)}></input>
                    </label>
            )}  
        </form>
    )
}
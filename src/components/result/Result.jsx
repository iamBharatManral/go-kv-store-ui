import styles from './Result.module.css'

const Result = ({data}) => {
    return (
        <div className={styles.value}>{data}</div>
    )
}

export default Result
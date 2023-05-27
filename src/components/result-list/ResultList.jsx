import Result from "../result/Result";
import styles from './ResultList.module.css'
const ResultList = ({results}) => {
    return (
        <div className={styles.results}>
            {results.map(result => <Result data={result.value} key={result.id}/>)}
        </div>
    )
}

export default ResultList
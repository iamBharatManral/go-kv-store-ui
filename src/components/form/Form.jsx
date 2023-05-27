import styles from './Form.module.css'
const Form = () => {
    return (
        <div className={styles.form}>
            <form action="">
                <input type="text"/>
                <button type={"submit"}>Send</button>
            </form>
        </div>
    )
}

export default Form
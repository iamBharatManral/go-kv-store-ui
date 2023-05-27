import styles from './Form.module.css'
import {useRef} from "react";
const Form = () => {
    const inputRef = useRef();
    const onclickHandler = (e) => {
        e.preventDefault()
        let command = inputRef.current.value;
        console.log(command)
        inputRef.current.value = ""
    }
    return (
        <div className={styles.form}>
            <form action="">
                <input type="text" ref={inputRef} placeholder={"set/get/delete <key> '<value>'"}/>
                <button type={"submit"} onClick={onclickHandler}>Send</button>
            </form>
        </div>
    )
}

export default Form
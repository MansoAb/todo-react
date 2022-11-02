import styles from "./form.module.css";

const Form = (props) => {
  return (
    <div className={styles.inputDiv}>
      <input
        className={styles.textInput}
        type="text"
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
      ></input>
      <input
        type="button"
        className={styles.buttonInput}
        value="добавить"
        onClick={() => props.addTodo(props.text)}
      ></input>
    </div>
  );
};

export default Form;

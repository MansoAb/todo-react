import styles from "./todo.module.css";

function Todo(props) {
  return props.todos.map((item, index) => {
    return (
      <div key={index} className={item.bl ? styles.todo1 : styles.todo}>
        <button
          className={styles.favourite}
          onClick={() => props.setFav(index)}
        >
          ✅
        </button>
        <span className={styles.text}>{item.text}</span>
        <button
          className={styles.delete}
          onClick={() => props.deleteTodo(index)}
        >
          ❌
        </button>
      </div>
    );
  });
}
export default Todo;

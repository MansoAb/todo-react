import Todo from "./Todo/Todo";
import styles from "./todos.module.css";

function Todos(props) {
  return (
    <div className={styles.todos}>
      <Todo
        setFav={props.setFav}
        todos={props.todos}
        deleteTodo={props.deleteTodo}
      />
    </div>
  );
}
export default Todos;

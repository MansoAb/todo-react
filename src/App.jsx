import Form from "./Form/Form";
import Header from "./Header/Header";
import styles from "./index.module.css";
import Todos from "./Todos/Todos";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  function deleteTodo(i) {
    setTodos(
      todos.filter((item, index) => {
        return index != i ? item : null;
      })
    );
  }

  function addTodo(i) {
    setTodos([
      {
        text: i,
        bl: false,
      },
      ...todos,
    ]);
    setText("");
    console.log(todos);
  }

  const [text, setText] = useState("");

  const setFav = (i) => {
    setTodos(
      todos.map((item, index) => {
        if (index === i) {
          return {
            ...item,
            bl: !item.bl,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className={styles.container}>
      <Header />
      <Form setText={setText} text={text} addTodo={addTodo} />
      <Todos setFav={setFav} todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
export default App;

import { useContext, useState } from "react";
import { TodoActionTypes } from "../reducers/TodoReducer";
import { TodoContext } from "../contexts/TodosContext";

export const AddTodo = () => {
  const [userInput, setUserInput] = useState("");
  const { dispatch } = useContext(TodoContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: TodoActionTypes.ADDED,
          payload: userInput,
        });

        setUserInput("");
      }}
    >
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button>Spara</button>
    </form>
  );
};

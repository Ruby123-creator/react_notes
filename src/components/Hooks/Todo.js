import { ACTIONS } from "./ACTIONS";
export default function Todo({ todo, dispatch }) {
    return (
      <div>
        <span style={{ textDecorationLine: todo.done ? "line-through" : "none" }}>
          {todo.task}
        </span>
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
          }}>
          Toggle
        </button>
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
          }}>
          Delete
        </button>
      </div>
    );
  }
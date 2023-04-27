import { useReducer,useState } from "react";
import Todo from "./Todo";

import { ACTIONS } from "./ACTIONS";

  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.task)];
      case ACTIONS.TOGGLE_TODO:
        return todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, done: !todo.done };
          }
          return todo;
        });
      case ACTIONS.DELETE_TODO:
        return todos.filter((todo) => todo.id !== action.payload.id);
      default:
        throw new Error();
    }
  }
  const newTodo = (task) => {
    return {
      id: Date.now(),
      task: task,
      done: false,
    };
  };
  function Usereducer1() {
    const [task, setTask] = useState("");
    const [todos, dispatch] = useReducer(reducer, []);
  
    function handleSubmit(e) {
      e.preventDefault();
      dispatch({
        type: ACTIONS.ADD_TODO,
        payload: {
          task: task,
        },
      });
      setTask("");
    }
    return (
      <div className='App'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button>Add task</button>
        </form>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </div>
    );
  }


  export default Usereducer1;
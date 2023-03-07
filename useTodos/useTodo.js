import { useEffect, useReducer } from "react"
import { todoReducer } from "./TodoReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || [])
        // console.log(todos)
    }, [todos])

    const handleNewTodo = ( todo ) => {
        // console.log({todo});´
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        // console.log({id});        
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    // const todosCounter = todos.length;
    // const pending = todos.filter(todo => !todo.done).length

  return {
    handleNewTodo,
    todosCounter: todos.length,
    pending: todos.filter(todo => !todo.done).length,
    handleDeleteTodo,
    handleToggleTodo,
    todos,
    // todosCounter,
    // pending,
  }
}

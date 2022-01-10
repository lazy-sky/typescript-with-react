import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { toggleTodo, removeTodo } from "../modules/todos";

export function useToggleTodo() {
  const dispatch = useDispatch();

  return useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);
}

export function useRemoveTodo() {
  const dispatch = useDispatch();

  return useCallback((id) => dispatch(removeTodo(id)), [dispatch]);
}

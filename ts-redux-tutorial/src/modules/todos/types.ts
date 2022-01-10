import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

// 액션들의 타입스크립트 타입
export type TodosAction = ActionType<typeof actions>;

// 상태 타입 및 초기값
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];

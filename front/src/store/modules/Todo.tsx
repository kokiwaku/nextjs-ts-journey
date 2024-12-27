import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import useTodo from "@/hooks/UseTodo";
import { TodoId, Todo, TodoState } from "@/types/todo";

// setting for initialState
const initialState: TodoState = {
  searchTodoValue: "",
};

// setting for hooks
const { filterTodoList } = useTodo();

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setSearchTodo: (state, { payload }: PayloadAction<string>) => {
      state.searchTodoValue = payload;
    },
  },
});

export const { setSearchTodo } = todoSlice.actions;
export default todoSlice.reducer;
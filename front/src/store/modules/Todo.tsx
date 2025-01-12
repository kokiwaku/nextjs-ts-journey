import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoState } from '@/types/Todo';

// setting for initialState
const initialState: TodoState = {
  searchTodoValue: '',
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setSearchTodo: (state, { payload }: PayloadAction<string>) => {
      state.searchTodoValue = payload;
    },
  },
});

export const { setSearchTodo } = todoSlice.actions;
export default todoSlice.reducer;

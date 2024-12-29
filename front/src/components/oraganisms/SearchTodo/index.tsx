'use client';

import { useDispatch } from 'react-redux';
import { setSearchTodo } from '@/store/modules/Todo';
import { useSelector } from '@/store';
import InputForm from '@/components/atoms/InputForm';

const SearchTodo: React.FC = () => {
  const dispatch = useDispatch();
  const { searchTodoValue } = useSelector((state) => state.todo);

  return (
    <>
      <div>
        <h2>Search Todo</h2>
        <InputForm
          type="text"
          value={searchTodoValue}
          onChange={(e) => {
            dispatch(setSearchTodo(e.target.value));
          }}
        />
      </div>
    </>
  );
};

export default SearchTodo;

import { useEffect, useMemo, useState } from 'react';
import { TodoListType } from '@/types/Todo';
import { EventType } from '@/types/Event';
import { setSearchTodo } from '@/store/modules/Todo';

type StatesType = {
  showTodoList: TodoListType | [];
  searchKeyword: string;
};
type ActionsType = {
  handleSetSeachKeyword: EventType['onChangeInput'];
};

type Props = {
  originTodoList: TodoListType | [];
  fetchTodoList: () => Promise<void>;
};
export const useTopTemplate = ({ originTodoList, fetchTodoList }: Props) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  /**
   * 表示するTodo Listを作成
   * useMemoの仕様について
   * 1. 第二引数の値が変更されたタイミングで再作成される
   * 2. 第二引数の組み合わせが同じ場合、キャッシュされている前回の作成結果が使われる（再作成は行われない）
   */
  const showTodoList = useMemo(() => {
    if (originTodoList === undefined) {
      return [];
    }

    return originTodoList.filter((todo) =>
      todo.content.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  }, [searchKeyword, originTodoList]);

  const handleSetSeachKeyword: ActionsType['handleSetSeachKeyword'] = (
    event
  ) => {
    setSearchKeyword(event.target.value);
  };

  const states: StatesType = {
    showTodoList,
    searchKeyword,
  };

  const actions: ActionsType = {
    handleSetSeachKeyword,
  };

  // 初回のみ実行
  useEffect(() => {
    fetchTodoList();
  }, []);

  // 呼び出し側で型推論できるように"as const"を指定
  return [states, actions] as const;
};

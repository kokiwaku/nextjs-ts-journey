import BaseLayout from '@/components/oraganisms/BaseLayout';
import SearchTodo from '@/components/oraganisms/SearchTodo';
import TodoList from '@/components/oraganisms/TodoList';

const TopTemplate: React.FC = () => {
  return (
    <>
      <BaseLayout title="Top">
        <SearchTodo />
        <TodoList />
      </BaseLayout>
    </>
  );
};

export default TopTemplate;

import TodoLayout from '@/components/oraganisms/TodoLayout';
import SearchTodo from '@/components/oraganisms/SearchTodo';
import TodoList from '@/components/oraganisms/TodoList';

const TopTemplate: React.FC = () => {
  return (
    <>
      <TodoLayout title="Top">
        <SearchTodo />
        <TodoList />
      </TodoLayout>
    </>
  );
};

export default TopTemplate;

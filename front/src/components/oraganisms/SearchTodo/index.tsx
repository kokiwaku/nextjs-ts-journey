import InputForm from '@/components/atoms/InputForm';
import { EventType } from '@/types/Event';

type Props = {
  searchKeyword: string;
  handleSetSeachKeyword: EventType['onChangeInput'];
};
const SearchTodo: React.FC<Props> = ({
  searchKeyword,
  handleSetSeachKeyword,
}: Props) => {
  return (
    <>
      <div>
        <h2>Search Todo</h2>
        <InputForm
          type="text"
          value={searchKeyword}
          onChange={handleSetSeachKeyword}
        />
      </div>
    </>
  );
};

export default SearchTodo;

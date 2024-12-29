import { Todo } from '@/types/todo';
import styled from 'styled-components';

const StyledTable = styled.table`
  display: flex;
  justify-content: center;
  margin: 2rem;

  td {
    text-align: left;
  }
  th {
    text-align: right;
  }
`;
type Props = {
  todo: Todo;
};
const TodoDetail: React.FC<Props> = ({ todo }) => {
  return (
    <StyledTable>
      <tbody>
        <tr>
          <th>ID：</th>
          <td>{todo.id}</td>
        </tr>
        <tr>
          <th>Content：</th>
          <td>{todo.content}</td>
        </tr>
        <tr>
          <th>Created At：</th>
          <td>{todo.created_at}</td>
        </tr>
        <tr>
          <th>Updated At：</th>
          <td>{todo.updated_at}</td>
        </tr>
      </tbody>
    </StyledTable>
  );
};

export default TodoDetail;

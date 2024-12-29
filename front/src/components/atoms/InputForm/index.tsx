import styled from 'styled-components';

const StyledInput = styled.input``;

type Props = JSX.IntrinsicElements['input'];
const InputForm: React.FC<Props> = ({ type, id, value, onChange }) => {
  return <StyledInput type={type} id={id} value={value} onChange={onChange} />;
};

export default InputForm;
